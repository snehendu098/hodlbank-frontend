import * as React from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { devAddress } from "../utils/constants";

const CreateHodl = () => {
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState(0);
  const { Moralis, account } = useMoralis();
  // const {data: balance} = useNativeBalance({chain: "rinkeby"})

  const contractProcessor = useWeb3ExecuteFunction();

  const handleSubmit = async () => {
    let options = {
      contractAddress: devAddress,
      functionName: "CreateHodl",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_widrawlTime",
              type: "uint256",
            },
          ],
          name: "CreateHodl",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      params: {
        _widrawlTime: new Date(date).getTime() / 1000,
      },
      msgValue: Moralis.Units.ETH(amount),
    };
    await contractProcessor.fetch({
      onError: (e) => {
        console.log(e);
      },
      params: options,
      onSuccess: () => {
        console.log("Success");
      },
    });
  };

  return (
    <div className="w-[90%] flex items-center flex-col bg-slate-500/50 md:w-full">
      <h2 className="text-2xl mb-3">
        Create <span className="text-yellow-500">HODL</span>
      </h2>
      <input
        type="number"
        className="text-slate-50 mb-7  mt-7  p-5 w-[95%] bg-transparent/30 border-b-2 border-white"
        pattern="[0-9]*"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Date and Time"
        defaultValue={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-7 w-[95%] bg-transparent/30 text-slate-50 p-5 border-b-2 border-white"
      />
      <button
        onClick={handleSubmit}
        className="w-[95%] bg-yellow-500 p-4 mb-3 rounded-full text-slate-800 font-bold text-2xl"
      >
        Create Hodl
      </button>
    </div>
  );
};

export default CreateHodl;
