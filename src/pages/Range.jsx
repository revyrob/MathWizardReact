import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";

function Range() {
  const [level, setLevel] = useState("");
  //onClick for level
  function chooseLevel(e) {
    const { value } = e.target.value;
    setLevel(value);
    console.log(level);
  }
  return (
    <div className="wizard-style__wrapper">
      <Header />
      <div className="wizard-style__wrapper goToGame">
        <p className="number">Choose your</p>
        <h1 className="wizard-style__title">Level</h1>
        <Link to="/equation" level={level}>
          <Btn
            className="goToGame__btn"
            B
            value="level1"
            onClick={chooseLevel}
            text="Level 1"
          />
        </Link>
        <Link to="/equation" level={level}>
          <Btn
            className="goToGame__btn"
            value="level2"
            onClick={chooseLevel}
            text="Level 2"
          />
        </Link>
      </div>
    </div>
  );
}

export default Range;
