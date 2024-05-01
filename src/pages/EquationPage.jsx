import React from "react";
import Equation2 from "../components/Equation2/Equation2";
import Header from "../components/Header/Header";
import Equation1 from "../components/Equation1/Equation1";

function EquationPage({ level }) {
  //making an an array for each game, which would switch every 24 hours
  // function makeArray(count, max) {
  //   let newArray = [];
  //   for (let i = 0; i < count; i++) {
  //     let newNum;
  //     do {
  //       newNum = Math.floor(Math.random() * max);
  //     } while (newNum === 0); // Keep regenerating new numbers until it's not zero
  //     newArray.push(newNum);
  //   }
  //   return newArray;
  // }

  // console.log(makeArray(60, 13));
  // console.log(makeArray(60, 13));

  const array1 = [
    9, 2, 11, 2, 7, 11, 5, 5, 1, 12, 9, 1, 5, 6, 6, 2, 12, 7, 9, 11, 7, 3, 3, 3,
    12, 2, 4, 3, 12, 4, 6, 9, 8, 11, 6, 11, 4, 4, 2, 1, 6, 11, 5, 1, 12, 12, 10,
    3, 5, 9, 10, 12, 7, 2, 4, 1, 5, 4, 12, 11,
  ];
  const array2 = [
    5, 5, 7, 9, 11, 10, 6, 4, 2, 2, 5, 9, 6, 9, 8, 10, 8, 12, 1, 6, 9, 8, 10, 1,
    1, 11, 11, 3, 7, 12, 5, 5, 9, 7, 8, 2, 3, 12, 12, 9, 2, 4, 7, 9, 7, 1, 2, 4,
    4, 2, 10, 10, 12, 1, 2, 8, 9, 3, 10, 10,
  ];
  return (
    <div className="wizard-style__wrapper">
      <Header />

      {level && level === "level2" ? (
        <Equation2 array1={array1} array2={array2} />
      ) : (
        <Equation1 array1={array1} array2={array2} />
      )}
    </div>
  );
}

export default EquationPage;
