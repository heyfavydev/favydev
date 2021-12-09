import React, { useEffect } from "react";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";

const dashboard = () => {


  const { user } = useUser()

  useEffect(() => {
    if (!user) {
      Router.push("/")
    }
  })
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favlent - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-500">Dashboard Page !</a>
        </h1>
      </main>
    </div>
  );
};

export default dashboard;
