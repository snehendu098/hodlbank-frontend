import Footer from "../components/Footer";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { ThirdwebProvider } from "@3rdweb/react";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="EPFu8n0m5niaxsyEfFLtTDsoOWUeXaf66MoVh6ss"
      serverUrl="https://wp4bayrlymnu.usemoralis.com:2053/server"
    >
      <div className="flex flex-col justify-center items-center w-full text-white bg-[#212121]">
        <ThirdwebProvider supportedChainIds={[4]}>
          <Component {...pageProps} />
          <Footer />
        </ThirdwebProvider>
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
