import { useState } from "react";

export default function Bill({ bill, onSetBill }) {
  return (
    <div className="bill">
      <label>How much was the meal? </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
