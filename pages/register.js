import React, { useState, useEffect } from "react";
import Head from "next/head";
import { auth, fireStore } from "../firebase/clientApp";
import Router from "next/router";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import { setUserCookie } from "../firebase/setUserMethods";
import { getUserInfo } from "../firebase/setUserMethods";

const register = () => {
  // google Sign in
  const provider = new GoogleAuthProvider();

  // form inputes
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  // signup Function
  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      updateProfile(user, { displayName: name })

      // adding user into firestore
      await addDoc(collection(fireStore, "users"), {
        name: name,
        email: email,
        password: password,
        blogs: [],
      });

      // sending userdata to firestore
      setUserCookie(user);
      Router.push("/");

      // setting token into cookies
    } catch (error) {
      window.alert(error);
      Router.push("/register");
    }
  };

  // signup With google
  const signUpGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user
      // setting token into cookies
      if (user) {
        setUserCookie(user);
      }
      await addDoc(collection(fireStore, "users"), {
        name: user.displayName,
        email: user.email,
        password: user.uid,
        blogs: [],
      });
      Router.push("/");
    } catch (error) {
      window.alert("Sign up failed");
      Router.push("/register");
    }
  };

  useEffect(() => {
    const isUser = getUserInfo();
    if (isUser) {
      Router.push("/");
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favlent - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-96 h-auto shadow-lg rounded-xl p-8 bg-blue-100">
          <h2 className="text-center text-3xl text-black font-bold mb-2">
            Sign Up to Favy
          </h2>
          <form onSubmit={signUp}>
            <div className="flex flex-col items-center justify-center">
              <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="px-3 py-2 rounded-sm w-72 border-black-2 my-4 shadow-sm outline-none"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="px-3 py-2 rounded-sm w-72 border-black-2 my-4 shadow-sm outline-none"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="px-3 py-2 rounded-sm w-72 border-black-2 my-4 shadow-sm outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                className="border-black-100 bg-blue-500 px-3 py-1 mt-3 rounded-md text-xl text-white w-72"
                type="submit"
              >
                Sign up
              </button>
              <button
                className="border-black-100 bg-blue-500 px-3 py-1 mt-3 rounded-md text-xl text-white w-72"
                onClick={signUpGoogle}
              >
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default register;
