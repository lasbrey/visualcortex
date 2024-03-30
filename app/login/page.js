import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto py-20">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form novalidate="" action="" className="space-y-6">
        <div className="space-y-1 text-sm">
          <label for="username" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border bg-gray-50 text-gray-800 focus:border-black"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border bg-gray-50 text-gray-800 focus:border-black"
          />
          <div className="flex justify-end text-xs text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-white bg-black">
          Sign in
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 text-gray-600">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          href="/register"
          className="underline text-gray-800"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
