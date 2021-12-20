import Head from "next/head";

const LodingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-foreground">
      <Head>
        <title>Loding....</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
            <a className="text-success2">Loding....</a>
        </h1>
      </main>
    </div>
  );
};

export default LodingScreen;
