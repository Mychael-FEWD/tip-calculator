import { useState } from "react";
import Bill from "./Bill.js";
import Tip from "./Tip.js";

export default function BillAndTip() {
  return (
    <>
      <div>
        <Bill />
        <Tip />
      </div>
    </>
  );
}
