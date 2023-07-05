import { useState } from "react";

const tipOptions = [
  { msg: "Never again", tip: 0 },
  { msg: "It was okay", tip: 10 },
  { msg: "It was good", tip: 15 },
  { msg: "It was better than expected", tip: 20 },
  { msg: "It was amazing", tip: 30 },
];

export default function TipPercent({ percent, onSetPercent }) {
  return (
    <>
      <div>
        <label>How good was the food? </label>
        <select value={percent} onChange={(e) => onSetPercent(Number(e.target.value))}>
          {tipOptions.map((option) => (
            <option value={option.tip} key={option.tip}>
              {option.msg} ({option.tip}%){" "}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
