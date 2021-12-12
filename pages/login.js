import React, { useState } from "react";
import Head from "next/head";
import { auth } from "../firebase/clientApp";
import Router from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "../components/stateProvider";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const signin = async (e) => {
    e.preventDefault();
    try {
      const userSignin = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: "SET_USER", user: userSignin });
      Router.push("/");
    } catch (error) {
      window.alert(error);
      Router.push("/register");
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen py-2 mt-48">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-96 h-auto py-2">
          { <h2 className="text-center text-3xl text-foreground font-bold mb-14">Continue to Favy</h2>}
          <form>
            <div className="flex flex-col items-center justify-center">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="px-3 py-2 rounded-lg h-9 w-96 mb-2 outline-black focus:ring-1 ring-success2 bg-background border border-accent2 font-normal text-foreground"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="px-3 py-2 rounded-lg h-9 w-96 mb-2 outline-black focus:ring-1 ring-success2 bg-background border border-accent2 font-normal text-foreground"
                placeholder="Password"
              />
              <button
                className="border-black-100 leading-none bg-[#1EA1F1] h-9 mt-2 rounded-lg text-xl text-white w-96 font-medium"
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
