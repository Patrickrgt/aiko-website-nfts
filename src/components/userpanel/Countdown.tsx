import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Timer = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ead182;
  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
`;

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const targetDate = new Date(Date.UTC(2023, 6, 6) + 1 * 60 * 60 * 1000); // Changed to July 6th, 1AM
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // start the timer when the component mounts
    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // clear timer on component unmount
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatTime = (time: number | undefined) => {
    return (time || 0).toString().padStart(2, "0");
  };

  return (
    <Timer>{`${formatTime(timeLeft.days)}:${formatTime(
      timeLeft.hours
    )}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}</Timer>
  );
};

export default CountdownTimer;
