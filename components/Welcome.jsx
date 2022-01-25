import Router from "next/router";
import React from "react";
import Card from "./Card";

const Welcome = () => {
  let isTrue = true;
  const handleClickGetStarted = () => {
    if (isTrue) {
      Router.push("/create-hodl");
    }
  };

  return (
    <div className="flex justify-between m-3 flex-nowrap items-center md:flex-col">
      <div className="w-1/2 text-4xl flex mt-10 flex-col justify-center items-center md:w-full ">
        <div className="w-5/6 md:w-full md:flex md:flex-col md:justify-center ">
          <p className="w-full">
            <span className="text-yellow-500 md:text-center ">Hodl</span> your
            Ethereum
          </p>
          <p className="text-xl mt-5 md:text-center ">
            In cryptocurrency investment, long term thinkers are less stressed.{" "}
            <span className="text-yellow-500">Hodl</span> your Ethereum in this{" "}
            <span className="text-yellow-500">Bank</span> and widraw after long
            period of time to get exponential returns because <br />
            <span className="font-caps text-2xl text-yellow-500">
              CRYPTO IS BEST WHEN YOU
              <span className="before:block before:absolute mt-3 ml-4 mr-1  before:-inset-1 before:-skew-y-12 before:bg-yellow-500 relative inline-block">
                <span className="relative m-2  text-white">HODL</span>
              </span>
            </span>
          </p>
          <div
            onClick={handleClickGetStarted}
            className="bg-gradient-to-r from-indigo-500 to-cyan-600 inline-block text-3xl p-3 mt-2 rounded-full cursor-pointer
           text-center md:mt-8 "
          >
            Get Started
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center md:w-[95%] ">
        <Card />
      </div>
    </div>
  );
};

export default Welcome;
