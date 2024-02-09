import React from "react";
import Equation from "../components/Equation/Equation";

function EquationHigh() {
  const highRange = 12;
  const randHigh = Math.floor(Math.random() * highRange);

  return (
    <div>
      <Equation num={randHigh} />
    </div>
  );
}

export default EquationHigh;
