import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Btn from "../components/Btn/Btn";

function Range() {
  const [level, setLevel] = useState("");
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
          {/* <Btn
            className={"goToGame__btn--2"}
            value={"level3"}
            onClick={chooseLevel}
            text="Vivian 3"
          /> */}
        </div>
      </div>
    </>
  );
}

export default Range;
