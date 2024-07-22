import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("August 22, 2024 07:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };
  // console.log(timeLeft);
  // console.log(targetDate);

  return (
    <div className="text-center p-4 bg-blue-100 rounded-lg shadow-md">
      {timeLeft ? (
        <div className="text-3xl font-mono">
          {`${formatTime(timeLeft.days)}:${formatTime(
            timeLeft.hours
          )}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
        </div>
      ) : (
        <span>Thời gian đã đến!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
