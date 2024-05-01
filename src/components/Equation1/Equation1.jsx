import React, { useEffect, useState } from "react";
import "../Equation2/Equation.scss";
import Timer from "../Timer/Timer";
import Final from "../Final/Final";
import ConfettiExplosion from "react-confetti-explosion";

function Equation({ array1, array2 }) {
  const [isComplete, setIsComplete] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [enteredValues, setEnteredValues] = useState(""); // State to track entered values
  //if there is a win show confetti
  const [showWin, setShowWin] = useState(false);
  const [bgImage, setBgImage] = useState("");
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);

  const number_given = array1[currentNumberIndex];
  const unknown_num = array2[currentNumberIndex];
  const given_sum = number_given * unknown_num;

  const valueInput = (value) => {
    setEnteredValues(enteredValues + value); // Append the entered value
  };

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
    setCurrentNumberIndex(currentNumberIndex + 1);
  };

  const removeInput = () => {
    //remove the last item in the string
    let str = enteredValues;
    str = str.slice(0, -1);
    setEnteredValues(str);
  };

  useEffect(() => {
    if (showWin) {
      const timer = setTimeout(() => {
        setShowWin(false); // Update showWin to whatever value you need after 300ms
      }, 300);

      return () => clearTimeout(timer); // Clear the timeout if component unmounts before 500ms
    }
  }, [showWin]);

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
            <button
              className="btn"
              text="Submit"
              onClick={() => inputResponse()}
            >
              Submit
            </button>
            <Timer
              isComplete={isComplete}
              onCompleteChange={handleCompleteChange}
            />
          </div>
        </>
      ) : (
        <Final losses={losses} wins={wins} totalNums={60} />
      )}
    </>
  );
}

export default Equation;
