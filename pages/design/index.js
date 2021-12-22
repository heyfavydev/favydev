import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/clientApp";
import Router from "next/router";
import { doc, getDoc } from "firebase/firestore";
import LodingScreen from "../../components/LodingScreen";
import userCheck from "../../Utils/userCheck";
import Link from "next/link";

const design = () => {
  const [user] = useAuthState(auth);
  const [Tamplet, setTamplet] = useState();
  const [Loding, setLoding] = useState(false);

  useEffect(async () => {
    // checking user session 
    userCheck(user);
    
    if (user) {
      setLoding(true);
      // check for user tamplet
      const userData = await getDoc(doc(db, "FavyUserDetails", user.uid));

   
      if (!userData.get("userTamplet")) {
        Router.push("/design/choose_tamplet")
      }
      // setting tamplet for this component
      setTamplet(userData.get("userTamplet"));
      setLoding(false);
    }
    
  },[]);

  return (
    <>
      {Loding ? (
        <LodingScreen />
      ) : (
        <>
          <div className="flex items-center justify-center min-h-screen text-foreground">
            <Head>
              <title>Deisgn</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
              <h4>{!Tamplet? "No Tamplet selected" : Tamplet}</h4>
              <h1 className="text-3xl md:text-5xl font-bold">
                welcome to <a className="text-success2">Design</a>
                </h1>
                <Link href="/design/choose_tamplet">
                  <h1
                    className="text-sm mt-3 p-3 cursor-pointer"
                  >
                    {!Tamplet? "Choose Tamplet" : "Change Tamplet"}
                  </h1>
                
                </Link>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default design;
