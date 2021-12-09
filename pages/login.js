import React, { useState } from "react";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";

// export async function getServerSideProps() {
//   const Prisma = new PrismaClient();

//   return {
    
//   }
// }

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favlent - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-96 h-auto shadow-lg rounded-xl p-8 bg-blue-100">
          <form action="">
            <div className="flex flex-col items-center justify-center">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="px-3 py-2 rounded-sm w-72 border-black-2 my-5 shadow-sm"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="px-3 py-2 rounded-sm w-72 border-black-2 my-5 shadow-sm"
              />
              <button className="border-black-100 bg-blue-500 px-3 py-1 rounded-md text-xl text-white" onSubmit={handleLogin}>Login</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default login;
