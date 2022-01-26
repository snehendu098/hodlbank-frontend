import React from "react";
import Card from "../components/Card";
import WidrawnCardRecords from "../components/WidrawnCardRecods";
import { useMoralis } from "react-moralis";
import { devAddress } from "../utils/constants";

const Alternate = () => (
  <span className="md:mt-2 text-2xl ">
    There are no records found, widraw one or click on the{" "}
    <span className="text-yellow-500">Get Records</span> button if you have
    widrawn one
  </span>
);

const widrawn = () => {
  const { account, Moralis } = useMoralis();
  const [tnx, setTnx] = React.useState([]);

  const handleTxns = async () => {
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
  };

  return (
    <div className="w-full flex flex-col min-h-[80vh] items-center">
      <p className="text-2xl font-bold my-3">
        ACTIVE <span className="text-yellow-500">HODL</span> RECORDS
      </p>

      <div className="flex w-full flex-nowrap p-3 justify-center md:flex-col-reverse">
        <div className="w-2/3 flex flex-col items-center text-center md:w-full ">
          {/* main logic */}
          {tnx.length <= 0 ? <Alternate /> : <></>}
          {tnx.map((item, index) => {
            let options = {};
            options.amount = item.amount.toString();
            options.createdAt = item.createdAt.toString();
            options.isWidrawn = item.isWidrawn.toString();
            options.dateOfWidrawal = item.dateOfWidrawal.toString();
            options.index = index;

            // console.log(options);
            if (options.isWidrawn === "true") {
              return (
                <React.Fragment key={index}>
                  <WidrawnCardRecords options={options} />
                </React.Fragment>
              );
            } else {
              return <React.Fragment key={index}></React.Fragment>;
            }
          })}
        </div>
        <div className="w-1/3 sticky top-0 h-min md:relative  md:w-full md:flex md:flex-col md:items-center">
          <Card extras={"mt-0 w-[90%] self-center "} />
          <div className="mt-0 w-[90%] flex justify-center items-center">
            <div
              onClick={handleTxns}
              className="md:w-[90%] w-[70%] text-2xl  cursor-pointer  text-center p-2 rounded-full bg-yellow-500 font-bold text-slate-700"
            >
              Get Records
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default widrawn;
