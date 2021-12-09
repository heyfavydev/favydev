import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <Head>
        <title>Favy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          {user ? "Welcome " : "Welcome to "}
          <a className="text-blue-500" href="https://nextjs.org">
            {user ? user.name : " Favy !"}
          </a>
        </h1>
      </main>
    </div>
  );
}
