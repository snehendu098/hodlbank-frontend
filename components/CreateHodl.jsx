import * as React from "react";

const CreateHodl = () => {
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState(0);

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //create a hodl
  };

  return (
    <form
      className="w-[90%] flex items-center flex-col bg-slate-500/50 md:w-full"
      onSubmit={handleSubmit}
    >
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
        name="Date"
        placeholder="Date and Time"
        defaultValue={date}
        onChange={handleDateChange}
        className="mb-7 w-[95%] bg-transparent/30 text-slate-50 p-5 border-b-2 border-white"
      />
      <button
        type="submit"
        className="w-[95%] bg-yellow-500 p-4 mb-3 rounded-full text-slate-800 font-bold text-2xl"
      >
        Create Hodl
      </button>
    </form>
  );
};

export default CreateHodl;
