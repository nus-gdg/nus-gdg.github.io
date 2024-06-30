import { useCallback, useEffect, useState } from "react";

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const diff = Math.max(countDownDate - now, 0);

    let timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    };

    return timeLeft;
  }, [countDownDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default useCountdown;
