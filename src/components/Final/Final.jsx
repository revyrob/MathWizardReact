import React from "react";
import "./Final.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import question from "../../assets/question-circle.svg";

export default function Final({ wins, losses, totalNums }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  const answered = wins + losses;
  const correctPerc = wins / answered;
  const responsePerc = answered / totalNums;
  const correctPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">What is correct percentage?</Popover.Header>
      <Popover.Body>
        Percentage of all answered questions: correct answers/questions answered
      </Popover.Body>
    </Popover>
  );

  const responsePopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">What is response percentage?</Popover.Header>
      <Popover.Body>
        Percentage of all responses/all questions (50 questions)
      </Popover.Body>
    </Popover>
  );
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
            <p className="final__score--subtitle">Correct Percentage</p>{" "}
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={correctPopover}
              className="final__overlay"
            >
              <img src={question} alt="test" />
            </OverlayTrigger>
          </div>
          {/* beside the p tag have a question mark to explain what it is */}
          <span>{(correctPerc * 100).toFixed(0)}%</span>{" "}
        </div>
        <div className="final__score--long">
          <div>
            <p>Response Percentage</p>{" "}
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={responsePopover}
              className="final__overlay"
            >
              <img src={question} alt="test" />
            </OverlayTrigger>
          </div>
          {/* beside the p tag have a question mark to explain what it is */}
          <span>{(responsePerc * 100).toFixed(0)}%</span>
        </div>
      </div>
      {/* <div className="final__share">Share</div> */}
      <p className="wizard-style__date">{today}</p>
    </section>
  );
}
