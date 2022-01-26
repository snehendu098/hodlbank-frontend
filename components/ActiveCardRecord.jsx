import React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import moment from "moment";
import { devAddress } from "../utils/constants";

const CardRecord = ({ options }) => {
  const { Moralis } = useMoralis();
  let truth = true;
  let widrawalDate = parseInt(options.widrawalTime);
  const contractProcessor = useWeb3ExecuteFunction();

  if (Math.floor(new Date().getTime() / 1000) > widrawalDate) {
    truth = false;
  }

  const handleClick = async () => {
    let option = {
      contractAddress: devAddress,
      functionName: "WidrawHodl",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "WidrawHodl",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      params: {
        _index: options.index,
      },
    };
    await contractProcessor.fetch({
      onError: (e) => {
        console.log(e);
      },
      params: option,
      onComplete: () => {
        console.log("Done");
      },
    });
  };

  return (
    <div
      className={`w-[90%] bg-emerald-700 my-2
      border border-white p-3 flex flex-col rounded-xl md:w-[90%]`}
    >
      <div className="w-full flex items-center mb-2">
        <p className="font-bold w-[75%] flex  ">
          <span className="text-yellow-500">ETH: </span>
          {Moralis.Units.FromWei(options.amount)}
        </p>
        <div className="w-[25%] flex flex-row-reverse">
          <button
            onClick={handleClick}
            disabled={truth}
            className={`p-1 px-2 disabled:text-slate-900  bg-blue-700 transition duration-500  hover:bg-blue-900  rounded-md drop-shadow-lg disabled:bg-gradient-to-r disabled:bg-slate-400 font-bold `}
          >
            Widraw
          </button>
        </div>
      </div>
      <hr className="w-full bg-white" />
      {/* timestamp calculator */}
      <p className="text-sm mt-2 ">
        Widrawl Date: {moment.unix(widrawalDate).format("DD/MM/YYYY")}
      </p>
    </div>
  );
};

export default CardRecord;
