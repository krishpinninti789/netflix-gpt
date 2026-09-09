"use server";

import { adminAuth } from "../../utils/firebase/fireBaseAdmin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema, signupSchema } from "../../utils/authSchemas/auth.schema";
import { AuthState } from "../../utils/types/auth.types";

export async function loginAction(
  previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const isSignup = formData.get("isSignup") === "true";

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = isSignup
    ? signupSchema.safeParse(data)
    : loginSchema.safeParse({
        email: data.email,
        password: data.password,
      });

  if (!result.success) {
    return {
      success: false,
      message: "Failed to sign in",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const validatedData = result.data;

  if (isSignup) {
    try {
      const user = await adminAuth.createUser({
        email: validatedData.email,
        password: validatedData.password,
        displayName:
          "name" in validatedData && typeof validatedData.name === "string"
            ? validatedData.name
            : undefined,
      });

      try {
        const loginResult = await signInWithFirebase(
          validatedData.email,
          validatedData.password,
        );

        const sessionCookie = await adminAuth.createSessionCookie(
          loginResult.idToken,
          {
            expiresIn: 1000 * 60 * 60 * 24 * 5,
          },
        );

        // 3. Store session in HTTP-only cookie
        const cookieStore = await cookies();

        cookieStore.set("session", sessionCookie, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 5,
        });
      } catch (error) {
        return {
          success: false,
          message: "Invalid email or password.",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "Unable to create account.",
      };
    }
  }

  try {
    const loginResult = await signInWithFirebase(
      validatedData.email,
      validatedData.password,
    );

    const sessionCookie = await adminAuth.createSessionCookie(
      loginResult.idToken,
      {
        expiresIn: 1000 * 60 * 60 * 24 * 5,
      },
    );

    // 3. Store session in HTTP-only cookie
    const cookieStore = await cookies();

    cookieStore.set("session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 5,
    });
  } catch (error) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }
  redirect("/browse");
}

async function signInWithFirebase(email: string, password: string) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Invalid credentials");
  }

  return data;
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
  redirect("/login");
}
