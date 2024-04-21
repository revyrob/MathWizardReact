import React from "react";
import Equation from "../components/Equation/Equation";
import Header from "../components/Header/Header";

function EquationPage() {
  //making an an array for each game, which would switch every 24 hours
  function makeArray(count, max) {
    let newArray = [];
    for (let i = 0; i < count; i++) {
      let newNum = Math.floor(Math.random() * max);
      newArray.push(newNum);
    }
    return newArray;
  }

  let array1 = makeArray(60, 12);
  let array2 = makeArray(60, 12);

  return (
    <div className="wizard-style__wrapper">
      <Header />
      <Equation array1={array1} array2={array2} />
    </div>
  );
}

export default EquationPage;
