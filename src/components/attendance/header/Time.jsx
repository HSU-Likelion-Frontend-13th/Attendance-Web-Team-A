import React, { useEffect, useState } from "react";
import * as S from "./Header.style";

const Time = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = String(timer.getHours()).padStart(2, "0");
  const minutes = String(timer.getMinutes()).padStart(2, "0");
  const seconds = String(timer.getSeconds()).padStart(2, "0");

  const clock = `${hours}:${minutes}:${seconds}`;

  return (
    <S.TimeWrapper>
      <S.TimeLabel>현재 시각</S.TimeLabel>
      <S.TimeText>{clock}</S.TimeText>
    </S.TimeWrapper>
  );
};

export default Time;
