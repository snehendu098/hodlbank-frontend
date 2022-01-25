import React from "react";
import CardRecord from "../components/ActiveCardRecord";
import Card from "../components/Card";

const Alternate = () => (
  <span className="md:mt-2 text-2xl ">
    There are no Hodls made, get started by creating one
  </span>
);

const actives = () => {
  return (
    <div className="w-full flex flex-col min-h-[80vh] items-center">
      <p className="text-2xl font-bold my-3">
        ACTIVE <span className="text-yellow-500">HODL</span> RECORDS
      </p>
      <div className="flex w-full flex-nowrap p-3 justify-center md:flex-col-reverse">
        <div className="w-2/3 flex flex-col items-center text-center md:w-full ">
          <CardRecord />
        </div>
        <div className="w-1/3 sticky top-0 h-min md:relative  md:w-full md:flex md:flex-col md:items-center">
          <Card extras={"mt-0 w-[90%] self-center "} />
          <div className="mt-0 w-[90%] flex justify-center items-center">
            <div className="md:w-[90%] w-[70%] text-center p-2 rounded-full bg-yellow-500 text-white">
              Create Hodl
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default actives;
