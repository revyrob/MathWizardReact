import React from "react";
//need score here

export default function Final({ wins, losses, totalNums }) {
  const answered = wins + losses;
  return (
    <div className="final">
      Final Score
      <div className="final">Correct:{wins}</div>
      <div className="final">Wrong:{losses}</div>
      <div className="final">Number of questions answered: {answered}</div>
      <div className="final">Out of: {totalNums}</div>
      <div className="final">Share</div>
    </div>
  );
}
