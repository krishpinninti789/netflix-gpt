"use server";

import { z } from "zod";
import { adminAuth } from "../utils/firebase/fireBaseAdmin";

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

      console.log(user);

      return {
        success: true,
        message: "Account created successfully.",
      };
    } catch (error) {
      console.error("Firebase signup error:", error);

      return {
        success: false,
        message: "Unable to create account.",
      };
    }
  }

  return {
    success: true,
    message: "Login successful.",
  };
}
