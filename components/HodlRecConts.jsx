import React from "react";
import Hr from "./Hr";
import { AiFillLock } from "react-icons/ai";
import Link from "next/link";
import { useMoralis } from "react-moralis";
// moralis integrate
const ConnectedTrue = () => (
  <>
    <Link href={"/records"}>
      <div className="flex h-[12rem] md:w-[94%] cursor-pointer  hover:bg-slate-800 transition duration-500 rounded-3xl w-[37%] bg-amber-500  my-4 text-3xl flex-col border  justify-center align-middle items-center ">
        <p>GET HODLS</p>
        <span className="text-sm">The hodls created by you</span>
      </div>
    </Link>
    <Link href={"/community"}>
      <div className="flex h-[12rem] md:w-[94%] cursor-pointer  hover:bg-slate-800 transition duration-500 rounded-3xl w-[37%] bg-amber-500  my-4 text-3xl flex-col border  justify-center align-middle items-center ">
        <p>ACCESS THE COMMUNITY</p>
        <span className="text-sm">Get access to the discord community</span>
      </div>
    </Link>
  </>
);

const ConnnectedFalse = () => (
  <div className="h-[12rem] flex flex-col  justify-center items-center">
    <AiFillLock fontSize={50} />
    <p className="text-2xl md:text-sm ">
      Connect your wallet to access your{" "}
      <span className="text-amber-500">HODL</span>s
    </p>
  </div>
);

const HodlRecConts = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="w-full flex justify-center items-center  flex-col ">
      <Hr height={2} />
      <p className="text-center text-2xl font-extrabold ">
        Your <span className="text-yellow-500">HODL</span>s
      </p>
      <Hr height={2} />
      <div className="flex flex-nowrap md:flex-col  justify-around items-center w-full">
        {isAuthenticated ? <ConnectedTrue /> : <ConnnectedFalse />}
      </div>
    </div>
  );
};

export default HodlRecConts;
