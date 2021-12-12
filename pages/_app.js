
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import "../styles/global.css";


function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
