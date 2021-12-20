import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import Router from "next/router";
import LodingScreen from "../components/LodingScreen";

export default function Home() {
  const [user, loding] = useAuthState(auth);

  return (
    <>
      {loding ? (
        <LodingScreen />
      ) : (
        <>
          <div className="flex items-center justify-center min-h-screen text-foreground">
            <Head>
              <title>Favy</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                {user ? "Welcome " : "Welcome to "}
                <a className=" text-success2" href="https://nextjs.org">
                  {user ? user.displayName : " Favy"}
                </a>
              </h1>
            </main>
          </div>
        </>
      )}
    </>
  );
}
