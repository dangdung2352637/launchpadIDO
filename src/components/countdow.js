import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTargetDate = new Date("August 14, 2024 18:15:00").getTime();
  const [targetDate, setTargetDate] = useState(initialTargetDate);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [is24HourCycle, setIs24HourCycle] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isTargetReached, setIsTargetReached] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setCurrentTime(now);

      if (now >= initialTargetDate) {
        setIsTargetReached(true);
        clearInterval(timer);
        return;
      }

      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft && !hasTriggered) {
        setHasTriggered(true);
        setTargetDate(now + 60 * 1000); // trigger a new countdown of 1 minute
      } else if (!newTimeLeft && hasTriggered) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, is24HourCycle, hasTriggered, initialTargetDate]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const getTimerDisplay = () => {
    if (isTargetReached) return "00:00:00:00";
    if (!timeLeft) return "00:00:00:00";
    const { days, hours, minutes, seconds } = timeLeft;
    return `${formatTime(days)}:${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
  };

  return (
    <div>
      <div>{is24HourCycle ? "Presale Ends In" : "Presale Start In"}</div>
      <div>{getTimerDisplay()}</div>
      <div>Current Time: {new Date(currentTime).toLocaleString()}</div>
      <div>Target Time: {new Date(initialTargetDate).toLocaleString()}</div>
      <div>Is Target Reached: {isTargetReached.toString()}</div>
    </div>
  );
};

export default CountdownTimer;
