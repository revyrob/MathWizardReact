import React from "react";
import "./Final.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import question from "../../assets/question-circle.svg";

export default function Final({ wins, losses, totalNums }) {
  const answered = wins + losses;
  const correctPerc = wins / answered;
  const responsePerc = answered / totalNums;
  return (
    <section className="final">
      <h1 className="final__header">Final Score</h1>
      <div className="final__score">
        <p className="final__text">✅ {wins}</p>
        <p className="final__text">❌ {losses}</p>
      </div>
      <div className="final__score">
        <div className="final__score--long">
          <div>
            <p>Correct Percentage</p> <img src={question} alt="test" />
          </div>

          {/* beside the p tag have a question mark to explain what it is */}
          <span>{(correctPerc * 100).toFixed(0)}%</span>
        </div>
        <div className="final__score--long">
          <p>Response Percentage</p>
          {/* beside the p tag have a question mark to explain what it is */}
          <span>{(responsePerc * 100).toFixed(0)}%</span>
        </div>
      </div>
      <div className="final__share">Share</div>
    </section>
  );
}
