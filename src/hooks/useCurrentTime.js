import { useEffect, useState } from "react";

// 현재 시간 훅
export const useCurrentTime = () => {
  const [timer, setTimer] = useState(new Date()); // 현재 시간

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return timer;
};
