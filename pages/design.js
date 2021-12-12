import React from "react";
import Head from "next/head";


const design = () => {


  
  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <Head>
        <title>Deisgn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to <a className="text-success2">Design</a>
        </h1>
      </main>
    </div>
  );
};

export default design;
