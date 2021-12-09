import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }) {
  return (
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
  );
}

export default App;
