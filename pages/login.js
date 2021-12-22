import React, { useState } from "react";
import Head from "next/head";
import { auth } from "../firebase/clientApp";
import Router from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { mapUserData } from "../firebase/mapUserData";
import { useAuthState } from "react-firebase-hooks/auth";
import LodingScreen from "../components/LodingScreen";

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Loding, setLoding] = useState();

  // login Method
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoding(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      window.alert(error);
    }
    Router.push("/");
    setLoding(false)
  };

  return (
    <>
      {Loding ? (
        <LodingScreen />
      ) : (
        <>
          <div className="flex items-center justify-center h-screen py-2">
            <Head>
              <title>Login</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <div className="w-96 py-2">
                <h2 className="text-center text-3xl text-foreground font-bold mb-14">
                  Continue to Favy
                </h2>

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
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default login;
