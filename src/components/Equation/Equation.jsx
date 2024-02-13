import React, { useState } from "react";

function Equation({ num }) {
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
  //put the number if the input if wrong the background is yello
  //if the background is the correct number it turns green stays 1sec and then goes to the next question

  return (
    <div>
      <div className="equation__row">
        <div>{number_given} x </div>
        <input />
        <div> = {given_sum}</div>
      </div>
      <div className="equation__keyboard">
        <div>
          {[...Array(9).keys()].map((index) => (
            <button
              key={index}
              className="Keyboard-module_row"
              data-key={index + 1}
              aria-label={`add ${index + 1}`}
              disabled={disabledButtons[index]}
              // onClick={() => toggleDisabled(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Equation;
