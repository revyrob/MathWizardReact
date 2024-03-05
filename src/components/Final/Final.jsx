import React from "react";
//need score here

export default function Final({ wins, losses }) {
  return (
    <div>
      Final Score: Correct:{wins} Wrong:{losses}
    </div>
  );
}
