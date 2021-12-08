import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <Layout>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default MyApp;
