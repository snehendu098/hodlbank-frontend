import React from "react";
// import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "../utils/shortenAddress";

const Card = ({ extras }) => {
  return (
    <div
      className={`flex flex-col flex-1 items-center justify-start w-full mt-10 ${extras} `}
    >
      <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 w-72 md:w-full my-5 eth-card white-glassmorphism">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-amber-500 flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fbbf24" />
            </div>
            <BsInfoCircle fontSize={17} color="#f59e0b" />
          </div>
          <div>
            <p className="text-amber-500 font-light text-sm">
              {shortenAddress("")}
            </p>
            <p className="text-amber-500 font-semibold text-lg mt-1">
              Ethereum
            </p>
            <p className="text-amber-500 font-light text-sm">Reward: 90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
