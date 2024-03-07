import React, { useState } from "react";
import "./Equation.scss";
import Timer from "../Timer/Timer";
import Final from "../Final/Final";

function Equation() {
  const nums = 12;
  const [isComplete, setIsComplete] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [response, setResponse] = useState("");
  const [enteredValues, setEnteredValues] = useState(""); // State to track entered values

  const [number_given, setNumber_given] = useState(
    Math.floor(Math.random() * nums)
  );
  const [unknown_num, setUnknown_num] = useState(
    Math.floor(Math.random() * nums)
  );

  const given_sum = number_given * unknown_num;

  const valueInput = (value) => {
    setEnteredValues(enteredValues + value); // Append the entered value
    setResponse(enteredValues + value); // Update response state
  };

  const clearInput = () => {
    setEnteredValues(""); // Clear entered values
    setResponse(""); // Clear response
  };

  // Function to handle completion state changes
  const handleCompleteChange = (newCompleteState) => {
    setIsComplete(newCompleteState);
  };

  const inputResponse = () => {
    if (enteredValues.length === 1 || enteredValues.length === 3) {
      // Do something with the response, for now, clear the input
      if (parseInt(enteredValues) === unknown_num) {
        //set a back something to show correct
        console.log("correct");
        setWins(wins + 1);
      } else {
        //set something to show wrong
        console.log("wrong");
        setLosses(losses + 1);
      }
    }
    //why for the first correct or wrong answer the state of loss or win is still zero
    setTimeout(() => clearInput(), 100);
    setNumber_given(Math.floor(Math.random() * nums));
    setUnknown_num(Math.floor(Math.random() * nums));
    console.log(wins);
  };

  const removeInput = () => {
    //remove the last item in the string
    let str = response;
    str = str.slice(0, -1);
    setResponse(str);
    setEnteredValues(str);
  };
  //within the return make a choice of two things happen if the timer is not 0seconds then keep asking questions
  //else link to the final page and pass the props of score to it.
  return (
    <>
      {isComplete === false ? (
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
            <button
              key="<"
              className="equation__btn"
              data-key="errase"
              aria-label=" "
              onClick={() => removeInput()}
            >
              🔙
            </button>
          </div>
          <button className="btn" text="Submit" onClick={() => inputResponse()}>
            Submit
          </button>
          <Timer
            isComplete={isComplete}
            onCompleteChange={handleCompleteChange}
          />
        </div>
      ) : (
        <Final losses={losses} wins={wins} />
      )}
    </>
  );
}

export default Equation;
