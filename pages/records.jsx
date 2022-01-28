import React, { useEffect } from "react";
import { useChain, useMoralis } from "react-moralis";
import CardRecord from "../components/ActiveCardRecord";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import WidrawnCardRecords from "../components/WidrawnCardRecods";
import { devAddress } from "../utils/constants";

const Alternate = () => (
  <span className="md:mt-2 text-2xl ">
    There are no records found, create one or click on the{" "}
    <span className="text-yellow-500">Get Records</span> button if you have
    created one
  </span>
);

const actives = () => {
  const { account, Moralis, isAuthenticated } = useMoralis();
  const [tnx, setTnx] = React.useState([]);

  const handleTxns = async () => {
    if (isAuthenticated) {
      let options = {
        contractAddress: devAddress,
        functionName: "getTransactions",
        abi: [
          {
            inputs: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "getTransactions",
            outputs: [
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "createdAt",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "isWidrawn",
                    type: "bool",
                  },
                  {
                    internalType: "uint256",
                    name: "widrawalTime",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "dateOfWidrawal",
                    type: "uint256",
                  },
                ],
                internalType: "struct HodlBank.SingleHodl[]",
                name: "",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        params: {
          account,
        },
      };

      const result = await Moralis.executeFunction(options);
      if (result) {
        setTnx(result);
      }
    }
  };

  return (
    <div className="w-full flex flex-col min-h-[80vh] items-center ">
      <p className="text-2xl font-bold my-3">
        ACTIVE <span className="text-yellow-500">HODL</span> RECORDS
      </p>
      <div className="flex w-full flex-nowrap p-3 justify-center md:flex-col-reverse">
        {tnx.length <= 0 ? (
          <div className="w-2/3 flex flex-col items-center text-center md:w-full ">
            <Alternate />
          </div>
        ) : (
          <div className="w-2/3 flex flex-col-reverse items-center text-center md:w-full ">
            {tnx.map((item, index) => {
              let options = {};
              options.amount = item.amount.toString();
              options.createdAt = item.createdAt.toString();
              options.isWidrawn = item.isWidrawn.toString();
              options.widrawalTime = item.widrawalTime.toString();
              options.dateOfWidrawal = item.dateOfWidrawal.toString();
              options.index = index;

              console.log(item);
              if (options.isWidrawn === "false") {
                return (
                  <React.Fragment key={index}>
                    <CardRecord options={options} />
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    <WidrawnCardRecords options={options} />
                  </React.Fragment>
                );
              }
            })}
          </div>
        )}
        <div className="w-1/3 sticky top-0 h-min md:relative  md:w-full md:flex md:flex-col md:items-center">
          <Card extras={"mt-0 w-[90%] self-center "} />
          <div className="mt-0 w-[90%] flex justify-center items-center">
            <div
              onClick={handleTxns}
              className="md:w-[90%] font-bold text-slate-700  w-[70%] text-center p-2 cursor-pointer  rounded-full bg-yellow-500 text-2xl "
            >
              Get Records
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default actives;
