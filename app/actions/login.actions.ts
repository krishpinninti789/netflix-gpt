"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type AuthState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
};

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

  if (isSignup) {
    // TODO:
    // Create user in your database.
    //
    // Example:
    // await db.user.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     password: hashedPassword,
    //   },
    // });

    return {
      success: true,
      message: "Account created successfully.",
    };
  }

  // TODO:
  // Find the user in your database.
  // Verify the password.
  // Create a session/cookie.
  //
  // Example:
  // const user = await db.user.findUnique({
  //   where: { email: data.email },
  // });

  return {
    success: true,
    message: "Login successful.",
  };
}
