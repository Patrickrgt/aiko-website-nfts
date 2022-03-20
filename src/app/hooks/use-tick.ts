import { useEffect, useState } from "react";

export const useTick = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(Math.random()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return tick;
};
