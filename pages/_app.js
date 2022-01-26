import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="EPFu8n0m5niaxsyEfFLtTDsoOWUeXaf66MoVh6ss"
      serverUrl="https://wp4bayrlymnu.usemoralis.com:2053/server"
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
