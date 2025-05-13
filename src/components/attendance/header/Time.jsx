import React from "react";
import * as S from "./Header.style";

const Time = ({ timer }) => {
  // 시간 포맷 함수
  const formatTime = (timer) => {
    if (!(timer instanceof Date)) return ""; // Date 객체인지

    const hours = String(timer.getHours()).padStart(2, "0");
    const minutes = String(timer.getMinutes()).padStart(2, "0");
    const seconds = String(timer.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <S.TimeWrapper>
      <S.TimeLabel>현재 시각</S.TimeLabel>
      <S.TimeText>{formatTime(timer)}</S.TimeText>
    </S.TimeWrapper>
  );
};

export default Time;
