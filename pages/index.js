import Head from "next/head";

import jsCookie from "js-cookie";

export default function Home() {
  const user = jsCookie.get("user");
  console.log(user);
  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <Head>
        <title>Favy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Welcome to
          <a className=" text-success2" href="https://nextjs.org">
            {" "}
            Favy!
          </a>
        </h1>
      </main>
    </div>
  );
}
