import React, { useState } from "react";
import "./Equation.scss";
import Button from "../Button/Button";

function Equation() {
  let num = 5;
  const [disabledButtons, setDisabledButtons] = useState(Array(9).fill(false));

  let maxMultiTable = 10;
  let number_given = Math.floor(Math.random() * num);
  let unknown_num = Math.floor(Math.random() * maxMultiTable);
  let given_sum = number_given * unknown_num;

  const toggleDisabled = (index) => {
    setDisabledButtons((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const valueInput = (e) => {
    const value = e.currentTarget.value;
    console.log(value);
  };
  //put the number if the input if wrong the background is yello
  //if the background is the correct number it turns green stays 1sec and then goes to the next question

  return (
    <div className="equation">
      <div className="equation__row">
        <div>{number_given} x </div>
        <input className="equation__input" />
        <div> = {given_sum}</div>
      </div>
      <div className="equation__keyboard">
        {[...Array(9).keys()].map((index) => (
          <button
            key={index}
            className="equation__btn"
            value={index + 1}
            data-key={index + 1}
            aria-label={`add ${index + 1}`}
            onClick={valueInput}
          >
            {index + 1}
          </button>
        ))}
        <button
          key="0"
          className="equation__btn"
          data-key="0"
          aria-label="add 0"
          value={0}
        >
          0
        </button>
      </div>
      <Button text="Submit"></Button>
    </div>
  );
}

export default Equation;
