import moment from "moment";
import React from "react";
import { useMoralis } from "react-moralis";

const WidrawnCardRecords = ({ options }) => {
  const date = parseInt(options.dateOfWidrawal);
  const { Moralis } = useMoralis();
  return (
    <div
      className={`w-[95%] bg-red-400 my-2
      border border-white p-3 flex flex-col rounded-xl md:w-[90%]`}
    >
      <div className="w-full flex items-center mb-2">
        <p className="font-bold w-[75%] flex">
          <span className="text-white">ETH:</span>{" "}
          {Moralis.Units.FromWei(options.amount)}
        </p>
        <div className="w-[25%] flex flex-row-reverse">
          <button
            disabled
            className={`p-1 px-2 bg-red-700 transition duration-500 rounded-full drop-shadow-lg font-bold `}
          >
            Widrawn
          </button>
        </div>
      </div>
      <hr className="w-full bg-white" />
      {/* timestamp calculator */}
      <p className="text-sm mt-2 ">
        Widrawn At:{" "}
        <span className="font-bold">
          {moment.unix(date).format("DD/MM/YYYY")}
        </span>
      </p>
    </div>
  );
};

export default WidrawnCardRecords;
