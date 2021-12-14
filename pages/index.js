import Head from "next/head";
import { getUserInfo } from "../firebase/setUserMethods";

export default function Home() {
  const user = getUserInfo();

  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <Head>
        <title>Favy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          {user? "Welcome " : "Welcome to"}
          <a className=" text-success2" href="https://nextjs.org">
            {" "}
           {user? user.displayName : "favy" }
          </a>
        </h1>
      </main>
    </div>
  );
}
