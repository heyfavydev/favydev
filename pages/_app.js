import jsCookie from "js-cookie";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
