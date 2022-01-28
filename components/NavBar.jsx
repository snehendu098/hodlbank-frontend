import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useChain, useMoralis } from "react-moralis";

const NavBar = () => {
  const [btnCheck, setBtnCheck] = useState("Connect");
  const {
    authenticate,
    isAuthenticated,
    logout,
    web3EnableError,
    enableWeb3,
    Moralis,
  } = useMoralis();
  const { switchNetwork, chain, chainId } = useChain();

  const HandleBtn = async () => {
    if (!isAuthenticated) {
      await authenticate();
    } else {
      await logout();
    }
  };

  console.log(chainId);

  if (isAuthenticated && web3EnableError) {
    Router.reload();
  }

  async function web3enable() {
    await enableWeb3();
    await Moralis.enableWeb3();
    await switchNetwork("0x4");
  }

  useEffect(() => {
    if (isAuthenticated) {
      web3enable();
      setBtnCheck("Log Out");
    } else setBtnCheck("Connect");
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col w-full  justify-center">
      <div className="w-full p-2 text-xl flex justify-between items-center">
        <Link href={"/"}>
          <div className="ml-1 text-2xl cursor-pointer font-bold">
            Hodl<span className="text-yellow-400">Bank</span>
          </div>
        </Link>
        <div
          className="flex flex-row-reverse justify-around mr-2"
          onClick={HandleBtn}
        >
          <div className="text-xl cursor-pointer  connect-btn p-2 font-semibold rounded-full text-neutral-700 bg-gradient-to-r from-yellow-200 to-yellow-500">
            {btnCheck}
          </div>
        </div>
      </div>
      <hr
        className="self-center items-center rounded-full w-[98%] md:w-[94%] "
        style={{ height: "4px", backgroundColor: "white" }}
      />
    </div>
  );
};

export default NavBar;
