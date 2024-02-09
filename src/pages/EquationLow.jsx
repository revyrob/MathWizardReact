import React from "react";
import Equation from "../components/Equation/Equation";

function EquationLow() {
  const lowRange = 5;
  const randLow = Math.floor(Math.random() * lowRange);
  return (
    <div>
      <Equation num={randLow} />
    </div>
  );
}

export default EquationLow;
