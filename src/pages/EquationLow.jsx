import React from "react";
import Equation from "../components/Equation/Equation";
import Header from "../components/Header/Header";

function EquationLow() {
  const lowRange = 5;
  const randLow = Math.floor(Math.random() * lowRange);
  return (
    <div className="wizard-style__wrapper">
      <Header />
      <Equation num={randLow} />
    </div>
  );
}

export default EquationLow;
