import React, { useEffect  , useState} from "react";
import Head from "next/head";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import userCheck from "../Utils/userCheck";
import LodingScreen from "../components/LodingScreen";

const blogs = () => {
  const [user] = useAuthState(auth);
  const [isLoding, setisLoding] = useState(true);

  useEffect(() => {
    userCheck(user);
    setisLoding(false);
  }, []);

  return (
    <>
      {isLoding ? (
        <LodingScreen />
      ) : (
        <>
          <div className="flex items-center justify-center min-h-screen text-foreground">
            <Head>
              <title>Blogs</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Welcome to <a className="text-success2">Blog</a>
              </h1>
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default blogs;
