import Head from 'next/head'
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
        {session? "Welcome " : "Welcome to "} 
          <a className="text-blue-500" href="https://nextjs.org">
            {session? session.user.name :"Favy !"} 
          </a>
        </h1>
       </main>
    </div>
  )
}
