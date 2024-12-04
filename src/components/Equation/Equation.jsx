/* This component shows how the equations are reprensented on the Equation page
 * The equations have different set-ups with inputs depending on the level selected by the user
 */
//custom comps
import "./Equation.scss";
import Final from "../Final/Final";

//libraries
import React, { useEffect, useState, useRef } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function Equation({ array1, array2, level }) {
  const [isComplete, setIsComplete] = useState(false); //for determining if session is done
  const [wins, setWins] = useState(0); //counting wins
  const [losses, setLosses] = useState(0); //counting losses
  const [enteredValues, setEnteredValues] = useState(""); // State to track entered values
  //if there is a win show confetti
  const [showWin, setShowWin] = useState(false); //end page for show win
  const [bgImage, setBgImage] = useState(""); //for X when it comes across page if the answer is wrong
  const [currentNumberIndexGiven, setCurrentNumberIndexGiven] = useState(0); //counting in the array for large array given
  const [currentNumberIndexUnknown, setCurrentNumberIndexUnknown] = useState(0); //counting in the array for the small array
  const [delay, setDelay] = useState(45); //seconds for how long the games will run
  const debounceTimer = useRef(null);

  //variables for each equation
  const firstNumber = array1[currentNumberIndexGiven]; //first number in the equation, the number is from the array in the backend
  const secondNumber = array2[currentNumberIndexUnknown]; //second number in the equation, the number is from the array in the backend
  const sumOfNumbers = firstNumber * secondNumber; //sum in regards to multiplication

  //the useEffect and function for the timer
  useEffect(() => {
    // If delay reaches 0, notify the parent and stop the timer
    if (delay <= 0) {
      setIsComplete(true); // Notify that timer is complete
      return; // Exit early if the timer is finished
    }

    // Start the interval only if delay is greater than 0
    const timer = setInterval(() => {
      setDelay((prevDelay) => prevDelay - 1); // Decrement delay by 1 every second
    }, 1000);

    // Cleanup the interval on unmount or when the timer finishes
    return () => clearInterval(timer);
  }, [delay, setIsComplete]); // Re-run useEffect when delay changes

  // Convert delay into minutes and seconds
  const minutes = Math.floor(delay / 60); // Convert to minutes
  const seconds = delay % 60; // Get remaining seconds

  //value input from the user and then amending the enteredValues
  const valueInput = (value) => {
    setEnteredValues((prev) => prev + value); // Append the entered value
  };

  //clear input after response
  const clearInput = () => {
    setEnteredValues(""); // Clear entered values
    setTimeout(() => {
      setBgImage(""); // Clear the background image after a short delay or it won't show at all
    }, 450);
  };

  //input fuction, counting wins, losses and showing the cross
  //this is for the input sum of numbers
  const inputResponseSum = () => {
    if (parseInt(enteredValues) === sumOfNumbers) {
      //set a back something to show correct
      setShowWin(true);
      //I had a problem iwht state updates and sometimes I found that I would enter in the correct answer but it would show an answer as wrong
      //this is using callback form adn I am hoping it will help it.
      setWins((prevWins) => prevWins + 1);
    } else {
      //set something to show wrong
      //I had a problem iwht state updates and sometimes I found that I would enter in the correct answer but it would show an answer as wrong
      //this is using callback form adn I am hoping it will help it.
      setLosses((prevLosses) => prevLosses + 1);
      setBgImage("images/cross.png");
    }
    clearInput();
    //i need this if statement because the shorter array needs to reset the index after 12
    if (currentNumberIndexUnknown < array2.length - 1) {
      setCurrentNumberIndexUnknown(currentNumberIndexUnknown + 1);
    } else {
      setCurrentNumberIndexUnknown(0);
    }
    if (currentNumberIndexGiven < array1.length - 1) {
      setCurrentNumberIndexGiven(currentNumberIndexGiven + 1);
    } else {
      setCurrentNumberIndexGiven(0);
    }
    //this continues until all 40 are completed
  };

  //input fuction, counting wins, losses and showing the cross
  //this is for the missing number for equation
  const inputResponseMissing = () => {
    if (parseInt(enteredValues) === secondNumber) {
      //set a back something to show correct
      setShowWin(true);
      setWins(wins + 1);
    } else {
      //set something to show wrong
      setLosses(losses + 1);
      setBgImage("images/cross.png");
    }
    clearInput();
    //i need this if statement because the shorter array needs to reset the index after 12
    if (currentNumberIndexUnknown < array2.length - 1) {
      setCurrentNumberIndexUnknown(currentNumberIndexUnknown + 1);
    } else {
      setCurrentNumberIndexUnknown(0);
    }
    if (currentNumberIndexGiven < array1.length - 1) {
      setCurrentNumberIndexGiven(currentNumberIndexGiven + 1);
    } else {
      setCurrentNumberIndexGiven(0);
    }
  };

  // Function for removing one character from the entered input
  const removeInput = () => {
    setEnteredValues((prev) => prev.slice(0, -1));
  };

  // Debounced version of the evaluation logic
  const debouncedEvaluate = () => {
    // Clear any previous timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set a new timer to evaluate the answer after 500ms (or any duration you prefer)
    debounceTimer.current = setTimeout(() => {
      if (level === "level4") {
        inputResponseMissing(); //call if the level is 4
      } else {
        inputResponseSum(); // Call the response handling function
      }
    }, 100);
  };

  // Call this function when the user submits an answer
  const handleSubmit = () => {
    debouncedEvaluate(); // Trigger the debounced evaluation
  };
  //the useEffect for showing wins after the timeout
  useEffect(() => {
    if (showWin) {
      const timer = setTimeout(() => {
        setShowWin(false); // Update showWin to whatever value you need after 300ms
      }, 200);

      return () => clearTimeout(timer); // Clear the timeout if component unmounts before 500ms
    }
  }, [showWin]);

  //X image when wrong answer
  let responseImg = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      {isComplete === false ? (
        <>
          {showWin && <ConfettiExplosion />}
          {level && level !== "level4" ? (
            <div className="equation" style={responseImg}>
              <div className="equation__row">
                <div>
                  {firstNumber} &times; {secondNumber}
                </div>
                =
                <input
                  className="equation__input"
                  value={enteredValues}
                  type="number"
                  readOnly
                />
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
              <button className="btn" text="Submit" onClick={handleSubmit}>
                Submit
              </button>
              <span>
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
            </div>
          ) : (
            <div className="equation" style={responseImg}>
              <div className="equation__row">
                <div>{firstNumber} &times; </div>
                <input
                  className="equation__input"
                  value={enteredValues}
                  type="number"
                  readOnly
                />
                <div> = {sumOfNumbers}</div>
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
              <button className="btn" text="Submit" onClick={handleSubmit}>
                Submit
              </button>
              <span>
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </span>
            </div>
          )}
        </>
      ) : (
        <Final losses={losses} wins={wins} totalNums={array1.length + 1} />
      )}
    </>
  );
}

export default Equation;
