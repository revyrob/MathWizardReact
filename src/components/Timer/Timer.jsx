import React, { useState, useEffect } from "react";

const Timer = ({ delayResend = "60", isComplete, onCompleteChange }) => {
  const [delay, setDelay] = useState(+delayResend);
  //set a state for when the time is out
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay((prevDelay) => prevDelay - 1);
    }, 1000);

    if (delay === 0) {
      onCompleteChange(true);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [delay, onCompleteChange]);

  return (
    <span>
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </span>
  );
};

export default Timer;
