import React, { useState, useEffect } from "react";

const Timer = ({ delayResend = "90", isComplete, onCompleteChange }) => {
  const [delay, setDelay] = useState(+delayResend);
  //set a state for when the time is out
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  function zero() {
    if (minutes === 0 && seconds === 0) {
      isComplete(true);
      onCompleteChange(true);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      zero();
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay]);

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default Timer;
