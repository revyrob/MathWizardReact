/*
 *
 *Currently not used
 */
import React, { useState, useEffect } from "react";

const Timer = ({ delayResend = "5", isComplete, setIsComplete }) => {
  // Initialize delay state with a number value
  const [delay, setDelay] = useState(Number(delayResend));
  // Function to handle completion state changes

  useEffect(() => {
    // If delay reaches 0, notify the parent and stop the timer
    if (delay <= 0) {
      setIsComplete(true); // Notify that timer is complete
      return; // Exit early if the timer is finished
    }

    // Start the interval only if delay is greater than 0
    const timer = setInterval(() => {
      setDelay((prevDelay) => prevDelay - 1); // Decrement delay by 1 every second
    }, 1000);

    // Cleanup the interval on unmount or when the timer finishes
    return () => clearInterval(timer);
  }, [delay, setIsComplete]); // Re-run useEffect when delay changes

  // Convert delay into minutes and seconds
  const minutes = Math.floor(delay / 60); // Convert to minutes
  const seconds = delay % 60; // Get remaining seconds

  return (
    <span>
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </span>
  );
};

export default Timer;
