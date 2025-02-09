import React from "react";

interface EstimatedEarningsProps {
  number: number;
  currency?: string; 
}

const EstimatedEarnings = ({ number, currency = "BNB" }: EstimatedEarningsProps) => {
  return (
    <p className="text-primary">
      Estimated Earnings{" "}
      <span className="text-black font-medium pl-2 text-lg">
        {number} <span className="text-secondary text-sm">{currency}</span>
      </span>
    </p>
  );
};

export default EstimatedEarnings;
