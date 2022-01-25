import React from "react";

const WidrawnCardRecords = () => {
  return (
    <div
      className={`w-[95%] bg-red-400 my-2
      border border-white p-3 flex flex-col rounded-xl md:w-[90%]`}
    >
      <div className="w-full flex items-center mb-2">
        <p className="font-bold w-[75%] flex">
          <span className="text-white">ETH:</span> 0.00000003
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
        Widrawn At: <span className="font-bold">1 Jan 2021 | 10:07 pm</span>
      </p>
    </div>
  );
};

export default WidrawnCardRecords;
