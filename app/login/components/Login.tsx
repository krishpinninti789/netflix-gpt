"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="w-full max-w-md rounded-lg bg-black/80 px-8 py-12 shadow-2xl sm:px-12">
      <h1 className="mb-8 text-3xl font-bold text-white">
        {isSignup ? "Sign Up" : "Sign In"}
      </h1>

      <form className="space-y-4">
        {isSignup && (
          <div>
            <label htmlFor="email" className="sr-only">
              Full Name
            </label>

            <input
              id="name"
              type="name"
              placeholder="Full Name"
              autoComplete="name"
              className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="sr-only">
            Email or mobile number
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email or mobile number"
            autoComplete="email"
            className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="w-full rounded bg-zinc-800 px-4 py-4 text-white outline-none placeholder:text-zinc-400 focus:bg-zinc-700 focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-[0.99] cursor-pointer"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        {!isSignup && (
          <div className="pt-2 text-center">
            <Link
              href="#"
              className="text-sm text-white underline hover:text-zinc-300"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </form>

      <div className="mt-10">
        {!isSignup ? (
          <p className="text-zinc-400">
            New to Netflix?{" "}
            <span
              className="font-medium text-white hover:underline cursor-pointer"
              onClick={() => setIsSignup((prev) => !prev)}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-zinc-400">
            Already have an account?{" "}
            <span
              className="font-medium text-white hover:underline cursor-pointer"
              onClick={() => setIsSignup((prev) => !prev)}
            >
              Sign In.
            </span>
          </p>
        )}
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
