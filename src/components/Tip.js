import { useState } from "react";
import TipPercent from "./TipPercent.js";

export default function Tip({
  percent1,
  percent2,
  onSetPercent1,
  onSetPercent2,
}) {
  return (
    <>
      <TipPercent percent={percent1} onSetPercent={onSetPercent1} />
      <TipPercent percent={percent2} onSetPercent={onSetPercent2} />
    </>
  );
}
