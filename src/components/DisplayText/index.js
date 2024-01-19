import React from "react";

const DisplayText = ({ title, value }) => {
  return (
    <p className="py-1">
      {title}:<span className="pl-2 font-semibold">{value}</span>
    </p>
  );
};

export default DisplayText;
