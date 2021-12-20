import "tailwindcss/tailwind.css";
import "../styles/global.css";
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
