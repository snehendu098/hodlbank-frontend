import React from "react";

const Hr = ({ height }) => {
  return (
    <hr
      className="self-center items-center rounded-full w-[98%] md:w-[94%] "
      style={{ height: `${height}px`, backgroundColor: "white" }}
    />
  );
};

export default Hr;
