import React from "react";
import Hr from "./Hr";
import { AiFillLock } from "react-icons/ai";
import Link from "next/link";
// moralis integrate
const ConnectedTrue = () => (
  <>
    <Link href={"/actives"}>
      <div className="flex h-[12rem] md:w-[94%] cursor-pointer  hover:bg-slate-800 transition duration-500 rounded-3xl w-[37%] bg-amber-500  my-4 text-3xl flex-col border  justify-center align-middle items-center ">
        <p>ACTIVE HODLS</p>
        <span className="text-sm">
          The hodls which have not yet been widrawn
        </span>
      </div>
    </Link>
    <Link href={"/widrawn"}>
      <div className="flex h-[12rem] md:w-[94%] cursor-pointer  hover:bg-slate-800 transition duration-500  rounded-3xl flex-col w-[37%] justify-center my-4 text-3xl border  bg-amber-500  align-middle items-center ">
        <p>WIDRAWN HODLS</p>
        <span className="text-sm">The hodls which have been widrawn</span>
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
  return (
    <div className="w-full flex justify-center items-center  flex-col ">
      <Hr height={2} />
      <p className="text-center text-2xl font-extrabold ">
        Your <span className="text-yellow-500">HODL</span>s
      </p>
      <Hr height={2} />
      <div className="flex flex-nowrap md:flex-col  justify-around items-center w-full">
        <ConnectedTrue />
        {/* <ConnnectedFalse /> */}
      </div>
    </div>
  );
};

export default HodlRecConts;
