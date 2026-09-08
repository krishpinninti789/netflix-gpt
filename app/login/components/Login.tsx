"use client";
import React, { useActionState, useState } from "react";
import Link from "next/link";
import { loginAction } from "@/app/actions/auth.action";
import { AuthState } from "@/utils/types/auth.types";

const initialState: AuthState = {
  success: false,
  message: "",
  errors: {},
};

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  const toggleAuthMode = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-black/80 px-8 py-12 shadow-2xl sm:px-12">
      {/* Heading */}

      <h1 className="mb-8 text-3xl font-bold text-white">
        {isSignup ? "Sign Up" : "Sign In"}
      </h1>

      <form action={formAction} className="space-y-4">
        {/* Tell Server Action whether this is Login or Signup */}

        <input
          type="hidden"
          name="isSignup"
          value={isSignup ? "true" : "false"}
        />

        {/* Name */}

        {isSignup && (
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
            />

            {state.errors?.name && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.name[0]}
              </p>
            )}
          </div>
        )}

        {/* Email */}

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email or mobile number"
            autoComplete="email"
            className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
          />

          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Password */}

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
          />

          {state.errors?.password && (
            <p className="mt-1 text-sm text-red-500">
              {state.errors.password[0]}
            </p>
          )}
        </div>

        {/* Server message */}

        {state.message && (
          <p
            className={`text-sm ${
              state.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}

        {/* Submit */}

        <button
          type="submit"
          disabled={isPending}
          className="mt-6 w-full cursor-pointer rounded bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending
            ? isSignup
              ? "Creating Account..."
              : "Signing In..."
            : isSignup
              ? "Sign Up"
              : "Sign In"}
        </button>

        {/* Forgot password */}

        {!isSignup && (
          <div className="pt-2 text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-white underline hover:text-zinc-300"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </form>

      {/* Toggle Login / Signup */}

      <div className="mt-10">
        <p className="text-zinc-400">
          {isSignup ? "Already have an account?" : "New to Netflix?"}{" "}
          <button
            type="button"
            onClick={toggleAuthMode}
            className="cursor-pointer font-medium text-white hover:underline"
          >
            {isSignup ? "Sign In." : "Sign up now."}
          </button>
        </p>
      </div>

      {/* Disclaimer */}

      <p className="mt-6 text-xs leading-5 text-zinc-500">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </div>
  );
};

export default Login;
