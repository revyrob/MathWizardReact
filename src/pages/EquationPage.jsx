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
    8, 2, 9, 7, 6, 2, 1, 8, 4, 4, 10, 11, 2, 2, 8, 3, 4, 5, 1, 6, 9, 5, 5, 4, 6,
    8, 2, 6, 12, 3, 9, 7, 1, 8, 12, 11, 9, 9, 12, 12, 9, 7, 3, 12, 3, 4, 7, 5,
    2, 8,
  ];
  const array2 = [
    4, 3, 9, 6, 4, 10, 6, 9, 2, 10, 8, 10, 11, 12, 9, 8, 8, 7, 1, 11, 10, 10,
    12, 4, 9, 3, 10, 9, 10, 1, 4, 5, 6, 1, 12, 7, 7, 11, 7, 10, 12, 6, 3, 12, 2,
    10, 5, 6, 2, 10,
  ];
  const array3 = [
    3, 6, 4, 12, 11, 7, 4, 5, 3, 7, 9, 6, 8, 10, 12, 4, 7, 8, 10, 5, 11, 4, 3,
    3, 1, 8, 5, 4, 9, 8, 3, 6, 4, 8, 6, 5, 7, 3, 10, 3, 2, 5, 9, 12, 3, 11, 11,
    1, 7, 8,
  ];
  const array4 = [
    9, 9, 7, 11, 2, 11, 12, 8, 4, 12, 1, 9, 9, 9, 8, 5, 10, 9, 4, 8, 8, 2, 9, 5,
    8, 5, 12, 3, 10, 11, 2, 9, 5, 6, 3, 9, 10, 2, 10, 6, 12, 6, 4, 6, 11, 9, 1,
    2, 8, 11,
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
