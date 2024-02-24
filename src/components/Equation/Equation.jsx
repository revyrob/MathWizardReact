import React, { useState } from "react";
import "./Equation.scss";
import Timer from "../Timer/Timer";

function Equation() {
  const nums = 12;
  const countDown = 10800;
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

  const inputResponse = () => {
    if (enteredValues.length === 1 || enteredValues.length === 3) {
      // Do something with the response, for now, clear the input
      if (parseInt(response) === unknown_num) {
        //set a back something to show correct
        console.log("correct");
        setWins(wins + 1);
      } else {
        //set something to show wrong
        console.log("wrong");
        setLosses(losses + 1);
      }
    }
    setTimeout(clearInput(), 100);
    setNumber_given(Math.floor(Math.random() * nums));
    setUnknown_num(Math.floor(Math.random() * nums));
    console.log("Here are your wins " + wins + " and your losses " + losses);
  };

  function loop() {
    //when the game starts it needs to start the timer
    //timer is coming from the countdown variable
    //decrease by 1000 to represent a minute
    //use setInterval or setTimeout within a use effect
    setTimeout(() => {});
  }
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
      <button className="btn" text="Submit" onClick={() => inputResponse()}>
        Submit
      </button>
      <Timer />
    </div>
  );
}

export default Equation;
