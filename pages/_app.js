import Footer from "../components/Footer";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.MORALIS_APP_ID}
      serverUrl={process.env.MORALIS_SERVER_URL}
    >
      <div className="flex flex-col justify-center items-center w-full text-white bg-[#212121]">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
