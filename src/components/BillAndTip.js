import { useState } from "react";
import Bill from "./Bill.js";
import Tip from "./Tip.js";

export default function BillAndTip() {
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(0);
  const [bill, setBill] = useState(0);

  function calcTip(bill, percent1, percent2) {
    return bill * ((percent1 + percent2) / 2 / 100);
  }
  const tip = calcTip(bill, percent1, percent2);

  return (
    <>
      <div>
        <h1>Calculate Your Tip Below</h1>
        <Bill bill={bill} onSetBill={setBill} />
        <Tip
          percent1={percent1}
          percent2={percent2}
          onSetPercent1={setPercent1}
          onSetPercent2={setPercent2}
        />
        {bill > 0 ? (
          <p className="total">
            Your total is ${(bill + tip).toFixed(2)} (${bill} + $
            {tip.toFixed(2)} tip)
          </p>
        ) : (
          <p className="total">Enter your bill to see the total</p>
        )}
      </div>
    </>
  );
}
