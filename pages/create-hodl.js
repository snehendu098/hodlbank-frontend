import React from "react";
import Card from "../components/Card";
import CreateHodl from "../components/CreateHodl";

const createhodl = () => {
  return (
    <>
      <div className="min-h-[70vh] flex md:flex-col flex-nowrap w-full md:items-center">
        <div className="w-2/3 md:w-[90%] m-5 flex justify-center items-ceenter">
          <CreateHodl />
        </div>
        <div className="w-1/3 md:flex md:flex-col md:items-center md:w-full">
          <Card extras={"md:mt-0 w-[80%]"} />
        </div>
      </div>
    </>
  );
};

export default createhodl;
