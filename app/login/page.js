"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/authContext";

const Login = () => {
  const { emailSignIn } = UserAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await emailSignIn(email, password);

      if (user) {
        router.push("/dashboard");
      } else {
        setLoginError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setLoginError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto py-20">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {loginError && (
          <p className="text-center text-sm text-red-500">{loginError}</p>
        )}
        <form novalidate="" action=""  method="POST" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <p
              rel="noopener noreferrer"
              onClick={handleLogin}
              className="underline text-white"
            >
              Sign in
            </p>
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
    </div>
  );
};

export default Login;
