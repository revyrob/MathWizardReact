import React, { useState } from "react";
import "./Equation.scss";
import Button from "../Button/Button";

function Equation() {
  const num = 5;
  const [response, setResponse] = useState("");
  const [enteredValues, setEnteredValues] = useState(""); // State to track entered values
  const maxMultiTable = 10;
  const number_given = Math.floor(Math.random() * num);
  const unknown_num = Math.floor(Math.random() * maxMultiTable);
  const given_sum = number_given * unknown_num;

  const valueInput = (value) => {
    setEnteredValues(enteredValues + value); // Append the entered value
    setResponse(enteredValues + value); // Update response state
  };

  const clearInput = () => {
    setEnteredValues(""); // Clear entered values
    setResponse(""); // Clear response
  };

  const inputResponse = () => {
    // Only submit response if exactly one or three values are entered
    if (enteredValues.length === 1 || enteredValues.length === 3) {
      // Do something with the response, for now, clear the input
      clearInput();
    }
  };
  return (
    <div className="equation">
      <div className="equation__row">
        <div>{number_given} x </div>
        <input
          className="equation__input"
          value={response}
          type="number"
          readOnly
        />
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
            onClick={() => valueInput(index + 1)}
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
          onClick={() => valueInput(0)}
        >
          0
        </button>
      </div>
      <Button text="Submit" onClick={inputResponse}></Button>
    </div>
  );
}

export default Equation;
