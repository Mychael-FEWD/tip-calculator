import { useState } from "react";

export default function Bill() {
  return (
    <div>
      <label>How much was the meal? </label>
      <input type="text" placeholder="$45.99"></input>
    </div>
  );
}
