"use client";
import { useContext, createContext, useEffect, useState } from "react";
import {
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Sign in with email and password
  const emailSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      return user;
    } catch (error) {
      console.error("Error signing in:", error);
      return null;
    }
  };

  // Create user with email, password, and name
  const createUser = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  };

  // Logout
  const logOut = () => {
    signOut(auth);
  };

  // Send password reset email
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  // Reset password with the provided token and new password
  const resetPassword = async (token, newPassword) => {
    try {
      await confirmPasswordReset(auth, token, newPassword);
      console.log("Password reset successful");
    } catch (error) {
      console.error("Error resetting password:", error.message);
      throw error;
    }
  };

  // Listen for changes in user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        emailSignIn,
        createUser,
        logOut,
        user,
        sendPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
