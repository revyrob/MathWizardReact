import React from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Range() {
  return (
    <div className="wizard-style__wrapper">
      <Header />
      <div className="wizard-style__wrapper goToGame">
        <p className="number">Choose your</p>
        <h1 className="wizard-style__title">Range</h1>
        <Link to="/equation-low">
          <Button className="goToGame__btn" text="0 - 5" />
        </Link>
        <Link to="/equation-high">
          <Button className="goToGame__btn" text="6 - 12" />
        </Link>
      </div>
    </div>
  );
}

export default Range;
