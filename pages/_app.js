import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { StateProvider } from "../components/stateProvider";
import { initialState, reducer } from "../components/reducer";

function App({ Component, pageProps }) {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default App;
