/* Final page given with scores. It would be good to add stats to this
 */
//custom styles comps
import "./Final.scss";
import question from "../../assets/question-circle.svg";

//libraries
import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function Final({ wins, losses }) {
  //find today's date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  const answered = wins + losses;
  const correctPerc = wins / answered;

  //function for popovers explaining what correct percentage is
  const correctPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">What is correct percentage?</Popover.Header>
      <Popover.Body>
        Percentage of all answered questions: correct answers/questions answered
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
      </div>
      {/* <div className="final__share">Share</div> */}
      <p className="wizard-style__date">{today}</p>
    </section>
  );
}
