import React, { useState } from "react";
import Head from "next/head";
import { auth } from "../firebase/clientApp";
import Router from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import jsCookie from "js-cookie";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((result) => {
        const user = result.user;
        const token = user.getIdToken();
        jsCookie.set("user", { name: user.displayName, token: token });
      });
      Router.push("/");

      
    } catch (error) {
      window.alert(error);
      Router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favlent - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-96 h-auto shadow-lg rounded-xl p-8 bg-blue-100 ">
          {/* <h2 className="text-center text-xl text">Sign In</h2> */}
          <form>
            <div className="flex flex-col items-center justify-center">
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
                onClick={signin}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default login;
