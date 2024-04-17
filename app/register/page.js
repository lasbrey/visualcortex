"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/authContext";

const Register = () => {
  const { createUser } = UserAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset error messages
    setPasswordError("");
    setConfirmPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }

    try {
      const user = await createUser(name, email, password);

      if (user) {
        router.push("/");
      } else {
        console.log("Registration unsuccessful");
        console.log(user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto py-20">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {confirmPasswordError && (
          <p className="text-red-500 text-center">{confirmPasswordError}</p>
        )}
        {passwordError && (
          <p className="text-red-500 text-center">{passwordError}</p>
        )}
        <form novalidate="" action="" method="POST" className="space-y-6" onSubmit={handleRegister}>
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border bg-gray-50 text-gray-800 focus:border-black"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border bg-gray-50 text-gray-800 focus:border-black"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-black">
            Sign up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            href="/login"
            className="underline text-gray-800"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
