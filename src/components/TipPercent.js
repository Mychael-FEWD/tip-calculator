import { useState } from "react";

export default function TipPercent() {
  return (
    <>
      <div>
        <label>How good was the food? </label>
        <select>
          <option>It was okay 10%</option>
          <option>It was good 15%</option>
          <option>It was better than expected 20%</option>
          <option>It was amazing 30%</option>
        </select>
      </div>
    </>
  );
}
