//custom comps and styling
import React, { useState, useEffect } from "react";
import Btn from "../components/Btn/Btn";

//libraries
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

//take the sign and the level in the browser to save it there and then carry it to the other comps when needed
//i can also use the browser to record the score everyday and log it, like Wordle final page
function Range() {
  const [level, setLevel] = useState("");
  const [sign, setSign] = useState("");
  const navigate = useNavigate();

  //function navigate to equation page
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function goToEquation(level) {
    navigate(`/equation?level=${level}`);
  }

  //onClick for level
  function chooseLevel(e) {
    const value = e.target.value;
    setLevel(value);
  }

  //onClick for sign
  function chooseSign(e) {
    const value = e.target.value;
    setSign(value);
  }

  // Use useEffect to trigger goToEquation after level state has been updated
  useEffect(() => {
    if (level !== "") {
      goToEquation(level);
    }
  }, [goToEquation, level]); // Run this effect whenever level state changes
  return (
    <>
      <div className="wizard-style__wrapper">
        <Header />
        <div className="wizard-style__wrapper">
          <p className="number">Choose your</p>
          {sign === "" ? (
            <>
              <h1 className="wizard-style__title">Sign</h1>
              <Btn
                className={"goToGame__btn"}
                value={"sign+"}
                onClick={chooseSign}
                text={"+"}
              />

              <Btn
                className={"goToGame__btn"}
                value={"sign*"}
                onClick={chooseSign}
                text="x"
              />
            </>
          ) : (
            <>
              <h1 className="wizard-style__title">Level</h1>
              <Btn
                className={"goToGame__btn"}
                value={"level1"}
                onClick={chooseLevel}
                text={"Level 1"}
              />

              <Btn
                className={"goToGame__btn"}
                value={"level2"}
                onClick={chooseLevel}
                text="Level 2"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Range;
