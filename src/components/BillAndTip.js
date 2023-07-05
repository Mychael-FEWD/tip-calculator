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
        <Bill bill={bill} onSetBill={setBill} />
        <Tip
          percent1={percent1}
          percent2={percent2}
          onSetPercent1={setPercent1}
          onSetPercent2={setPercent2}
        />
        <p>Your tip suggestion: {percent1}%</p>
        <p>Your friend's tip suggestion: {percent2}%</p>
        <p>
          Your total is ${bill + tip} (${bill} + ${tip} tip)
        </p>
      </div>
    </>
  );
}
