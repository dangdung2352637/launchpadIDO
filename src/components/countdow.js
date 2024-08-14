import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTargetDate = new Date("August 14, 2024 18:15:00").getTime();
  const [targetDate, setTargetDate] = useState(initialTargetDate);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [is24HourCycle, setIs24HourCycle] = useState(false);

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
    const timer = setInterval(
      () => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (!newTimeLeft) {
          if (!is24HourCycle) {
            setIs24HourCycle(true);
            setTargetDate(new Date().getTime() + 24 * 60 * 60 * 1000);
          } else {
            setIs24HourCycle(false);
            setTargetDate(new Date().getTime() + 24 * 60 * 60 * 1000);
          }
        }
      },
      [calculateTimeLeft],
      1000
    );

    return () => clearInterval(timer);
  }, [targetDate, is24HourCycle]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const getTimerDisplay = () => {
    if (!timeLeft) return "00:00:00:00";
    const { days, hours, minutes, seconds } = timeLeft;
    return `${formatTime(days)}:${formatTime(hours)}:${formatTime(
      minutes
    )}:${formatTime(seconds)}`;
  };

  return (
    <div className="text-center p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {is24HourCycle ? " Presale Ends In" : "Presale Start In"}
      </h2>
      <div className="text-3xl font-mono">{getTimerDisplay()}</div>
    </div>
  );
};

export default CountdownTimer;
