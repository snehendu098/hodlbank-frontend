import React from "react";
// import { FaEthereum } from "react-icons/fa";

const CardRecord = () => {
  const truth = false;
  return (
    <div
      className={`w-[90%] bg-emerald-700 my-2
      border border-white p-3 flex flex-col rounded-xl md:w-[90%]`}
    >
      <div className="w-full flex items-center mb-2">
        <p className="font-bold w-[75%] flex  ">
          <span className="text-yellow-500">ETH:</span> 0.00000003
        </p>
        <div className="w-[25%] flex flex-row-reverse">
          <button
            // timestamp logic
            disabled={truth}
            className={`p-1 px-2 disabled:text-slate-900  bg-blue-700 transition duration-500  hover:bg-blue-900  rounded-md drop-shadow-lg disabled:bg-gradient-to-r disabled:bg-slate-400 font-bold `}
          >
            Widraw
          </button>
        </div>
      </div>
      <hr className="w-full bg-white" />
      {/* timestamp calculator */}
      <p className="text-sm mt-2 ">Widrawl Date: 1 Jan, 2021</p>
    </div>
  );
};

export default CardRecord;
