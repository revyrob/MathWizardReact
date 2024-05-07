import React from "react";
import Equation2 from "../components/Equation2/Equation2";
import Header from "../components/Header/Header";
import Equation1 from "../components/Equation1/Equation1";
import { useSearchParams } from "react-router-dom";

function EquationPage() {
  const [searchParams] = useSearchParams();

  const level = searchParams.get("level");
  //making an an array for each game, which would switch every 24 hours
  function makeArray(count, max) {
    let newArray = [];
    for (let i = 0; i < count; i++) {
      let newNum;
      do {
        newNum = Math.floor(Math.random() * max);
      } while (newNum === 0); // Keep regenerating new numbers until it's not zero
      newArray.push(newNum);
    }
    return newArray;
  }

  console.log(makeArray(50, 13));
  console.log(makeArray(50, 13));

  const array1 = [
    12, 2, 1, 10, 6, 2, 2, 8, 5, 5, 11, 10, 5, 1, 1, 11, 11, 6, 10, 7, 12, 5, 1,
    4, 7, 9, 12, 7, 12, 2, 4, 11, 9, 8, 1, 6, 5, 8, 2, 2, 6, 8, 3, 3, 11, 1, 12,
    9, 3, 7,
  ];
  const array2 = [
    3, 2, 5, 3, 10, 1, 6, 2, 2, 12, 3, 4, 1, 4, 3, 1, 12, 9, 4, 4, 6, 12, 5, 1,
    5, 8, 3, 9, 11, 10, 6, 5, 9, 11, 3, 12, 12, 10, 4, 8, 8, 10, 6, 12, 11, 12,
    7, 8, 12, 4,
  ];
  const array3 = [
    4, 11, 12, 9, 10, 7, 7, 9, 7, 9, 10, 12, 8, 8, 8, 7, 3, 11, 12, 10, 10, 10,
    4, 6, 3, 10, 10, 7, 8, 2, 7, 2, 10, 2, 1, 6, 1, 4, 10, 7, 1, 7, 5, 3, 6, 8,
    12, 2, 5, 3,
  ];
  const array4 = [
    2, 2, 9, 2, 8, 4, 10, 1, 3, 5, 3, 11, 3, 7, 12, 11, 3, 7, 11, 8, 12, 12, 8,
    10, 4, 9, 12, 8, 8, 7, 2, 10, 7, 8, 12, 4, 12, 4, 5, 3, 12, 9, 9, 12, 9, 1,
    8, 7, 7, 3,
  ];
  return (
    <div className="wizard-style__wrapper">
      <Header />

      {level && level === "level2" ? (
        <Equation2 array1={array1} array2={array2} />
      ) : (
        <Equation1 array1={array3} array2={array4} />
      )}
    </div>
  );
}

export default EquationPage;
