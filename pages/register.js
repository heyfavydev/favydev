import React, { useState } from "react";
import Head from "next/head";
import { auth } from "../firebase/clientApp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Router from "next/router";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";

const register = () => {
  // google Sign in
  const provider = new GoogleAuthProvider();

  // Datalayer

  // form inputes
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  // signup Function
  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await signInWithEmailAndPassword(auth, email, password);
      Router.push("/");
    } catch (error) {
      window.alert(error);
      Router.push("/register");
    }
  };

  // signup With google
  const signUpGoogle = async (e) => {
    e.preventDefault();
    await signInWithRedirect(auth, provider);
    await getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        Router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favlent - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-96 h-auto shadow-lg rounded-xl p-8 bg-blue-100">
          <form>
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
              />
              <button
                className="border-black-100 bg-blue-500 px-3 py-1 mt-3 rounded-md text-xl text-white w-72"
                onClick={signUp}
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
