import React from "react";
import "./Final.scss";

export default function Final({ wins, losses, totalNums }) {
  const answered = wins + losses;
  return (
    <section className="final">
      <h1 className="final__header">Final Score</h1>
      <div className="final__score">
        <p className="final__text">✅ {wins}</p>
        <p className="final__text">❌ {losses}</p>
      </div>
      <div className="final__score">
        <div className="final__score--long">
          <p>Answered Questions:</p>
          <span>{answered}</span>
        </div>
        <div className="final__score--long">
          <p>Total Questions:</p>
          <span>{totalNums}</span>
        </div>
      </div>
      <div className="final__share">Share</div>
    </section>
  );
}
