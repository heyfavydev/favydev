import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar"


function App({ Component, pageProps }) {

  return (
    <Layout>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default App;
