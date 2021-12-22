import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import { auth, db } from "../firebase/clientApp";
import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { mapUserData } from "../firebase/mapUserData";
import LodingScreen from "../components/LodingScreen";

const registration = () => {
  // google Sign in
  const provider = new GoogleAuthProvider();

  // form inputes
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [Loding, setLoding] = useState();

  // signup Function
  const signUp = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const Tempuser = result.user;

      await updateProfile(Tempuser, { displayName: name });

      const mapData = mapUserData(Tempuser);

      // adding user into database
      await setDoc(doc(db, "FavyUserDetails", mapData.id), mapData);

      // createRepo(name)
      Router.push("/");
      // setting token into cookies
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/email-already-in-use") {
        window.alert("Email already registered");
      } else if ((error.code === "auth/weak-password")) {
        window.alert("Weak Password: Password should be at least 6 characters");
      }
      signOut(auth);
    }
    setLoding(false);
  };

  // signup With google
  const signUpGoogle = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const mapData = mapUserData(user);

      // adding user into database
      await setDoc(doc(db, "FavyUserDetails", mapData.id), mapData, {
        merge: true,
      });

      Router.push("/");
    } catch (error) {
      window.alert(error.code);
      signOut(auth);
      Router.push("/registration");
    }
    setLoding(false);
  };

  return (
    <>
      {Loding ? (
        <LodingScreen />
      ) : (
        <>
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
                    <p className="text-sm mt-2 ">
                      Already have an accout ,{" "}
                      <Link href="/login">click here</Link>
                    </p>
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

export default registration;
