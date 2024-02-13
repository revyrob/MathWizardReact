import React, { useEffect } from "react";
import Equation from "../components/Equation/Equation";
import Header from "../components/Header/Header";

function EquationHigh() {
  const highRange = 12;

  const randHigh = Math.floor(Math.random() * highRange);
  console.log(randHigh);
  return (
    <div className="wizard-style__wrapper">
      <Header />
      <Equation num={randHigh} />
    </div>
  );
}

export default EquationHigh;
