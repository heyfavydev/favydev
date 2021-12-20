import React from "react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";
import Router from "next/router";

const choose_tamplet = () => {
  const [user , loding] = useAuthState(auth);
  if (loding) return "";
  
  const setUserTampletMethod = async (e) => {
    try {
      // setting user Tamplet
      await setDoc(doc(db, "FavyUserDetails" , user.uid), { userTamplet: e.target.innerText }, { merge: true })
      Router.push("/design")
      
    } catch (error) {
      window.alert(error)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <Head>
        <title>Deisgn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Choose your <a className="text-success2">Tamplet</a>
        </h1>
        <div className="flex w-full h-96 mt-10">
          <div
            className="flex-1 border m-3 cursor-pointer active:border-slate-50 "
            onClick={setUserTampletMethod}
          >
            <p>Tamplet 1</p>
          </div>
          <div
            className="flex-1 border m-3 cursor-pointer active:border-slate-50"
            onClick={setUserTampletMethod}
          >
            <p>Tamplet 2</p>
          </div>
          <div
            className="flex-1 border m-3 cursor-pointer active:border-slate-50"
            onClick={setUserTampletMethod}
          >
            <p>Tamplet 3</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default choose_tamplet;
