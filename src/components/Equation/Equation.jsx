//custom comps
import "./Equation.scss";
import Timer from "../Timer/Timer";
import Final from "../Final/Final";

//libraries
import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

function Equation({ array1, array2, level }) {
  //states used within the camp
  const [isComplete, setIsComplete] = useState(false); //for determining if session is done
  const [wins, setWins] = useState(0); //counting wins
  const [losses, setLosses] = useState(0); //counting losses
  const [enteredValues, setEnteredValues] = useState(""); // State to track entered values
  //if there is a win show confetti
  const [showWin, setShowWin] = useState(false); //end page for show win
  const [bgImage, setBgImage] = useState(""); //for X when it comes across page if the answer is wrong
  const [currentNumberIndexGiven, setCurrentNumberIndexGiven] = useState(0); //counting in the array for small array given
  const [currentNumberIndexUnknown, setCurrentNumberIndexUnknown] = useState(0); //counting in the array for the larger array

  //variables for each equation
  const number_given = array1[currentNumberIndexGiven];
  const unknown_num = array2[currentNumberIndexUnknown];
  const given_sum = number_given * unknown_num;

  //value input from the user and then amending the enteredValues
  const valueInput = (value) => {
    setEnteredValues(enteredValues + value); // Append the entered value
  };

  //clear input after response
  const clearInput = () => {
    setEnteredValues(""); // Clear entered values
    setTimeout(() => {
      setBgImage(""); // Clear the background image after a short delay or it won't show at all
    }, 450);
  };

  // Function to handle completion state changes
  const handleCompleteChange = (newCompleteState) => {
    setIsComplete(newCompleteState);
  };

  //input fuction, counting wins, losses and showing the cross
  const inputResponse = () => {
    if (parseInt(enteredValues) === given_sum) {
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
    if (currentNumberIndexGiven < 11) {
      setCurrentNumberIndexGiven(currentNumberIndexGiven + 1);
    } else {
      setCurrentNumberIndexGiven(0);
    }
    //this continues until all 48 are completed
    setCurrentNumberIndexUnknown(currentNumberIndexUnknown + 1);
  };

  //back space to remove input
  const removeInput = () => {
    //remove the last item in the string
    let str = enteredValues;
    str = str.slice(0, -1);
    setEnteredValues(str);
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
          {level && level === "level1" ? (
            <div className="equation" style={responseImg}>
              <div className="equation__row">
                <div>
                  {number_given} &times; {unknown_num}
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
            </div>
          ) : (
            <div className="equation" style={responseImg}>
              <div className="equation__row">
                <div>{number_given} &times; </div>
                <input
                  className="equation__input"
                  value={enteredValues}
                  type="number"
                  readOnly
                  onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
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
            </div>
          )}
          <button className="btn" text="Submit" onClick={() => inputResponse()}>
            Submit
          </button>
          <Timer
            isComplete={isComplete}
            onCompleteChange={handleCompleteChange}
          />
        </>
      ) : (
        <Final losses={losses} wins={wins} totalNums={50} />
      )}
    </>
  );
}

export default Equation;
