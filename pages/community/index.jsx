import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-[70vh] w-full">
      <h1 className="text-4xl text-center">
        Get access to the <span className="text-yellow-500">Hodl</span>{" "}
        Community
      </h1>
      <p className="text-2xl my-7 mx-16">
        Get access to the exclusive community of{" "}
        <span className="text-yellow-500">Hodl Bank</span> users. Here, you will
        get to know and meet crypto enthusiasts and can interact with them.{" "}
        <span className="font-bold">
          Get a membership NFT to propose decissions and features to the
          community and the application
        </span>
      </p>
      <div className="my-5 flex flex-col  justify-center items-center w-full">
        <a
          href="https://discord.gg/DS7fPzX5"
          target={"_blank"}
          className="bg-[#5865F2] rounded-md text-xl p-5 cursor-pointer flex items-center justify-around"
        >
          <FaDiscord className="mr-2" fontSize={30} /> Join Discord
        </a>
        <a
          href={
            "https://testnets.opensea.io/assets/0x23387a6fbfddab0dec2d08fa23575d3caa0ae7c1/0"
          }
          target={"_blank"}
        >
          <div className="bg-[#ff8000] rounded-md text-xl mt-3 font-extrabold  cursor-pointer p-5">
            Get OpenSea NFT
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
