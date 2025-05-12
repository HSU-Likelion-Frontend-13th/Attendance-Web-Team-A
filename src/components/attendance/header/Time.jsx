import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
`;

const Label = styled.div`
  font-size: 30px;
`;

const TimeText = styled.div`
  font-size: 70px;
  font-weight: bold;
`;

const Time = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {setTimer(new Date());}, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = String(timer.getHours()).padStart(2, "0");
  const minutes = String(timer.getMinutes()).padStart(2, "0");
  const seconds = String(timer.getSeconds()).padStart(2, "0");

  const clock = `${hours}:${minutes}:${seconds}`;

  return (
    <Wrapper>
      <Label>현재 시각</Label>
      <TimeText>{clock}</TimeText>
    </Wrapper>
  );
};

export default Time;
