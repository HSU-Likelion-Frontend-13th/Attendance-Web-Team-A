import React, { useState } from "react";
import styled from "styled-components";
import c from "../../../styles/colors";
import { checkAttendanceTime } from "../../../utils/checkTime";
import { getAttendanceStyle } from "../../../utils/checkAttendance";

const ButtonContainer = styled.div`
  width: 18.18vw;
  height: 11.94rem;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
`;

// 출석하기 버튼
const AttendanceButton = ({ course, timer, onAttendance }) => {
  const [clicked, setClicked] = useState(false); // 클릭 여부
  const [status, setStatus] = useState("unavailable"); // 출석 상태

  // 클릭하면 현재 상태에 따라 수행
  const handleClick = () => {
    const result = checkAttendanceTime(course, timer);

    if (result === "unavailable") {
      onAttendance(false); // Warning 모달 띄우기
    } else {
      setStatus(result);
      setClicked(true);
      onAttendance(true, result); // 출석 상태 전달
    }
  };

  const { bgColor, textColor, text } = getAttendanceStyle(status, clicked, c);

  return (
    <ButtonContainer
      $bgColor={bgColor}
      $textColor={textColor}
      onClick={handleClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default AttendanceButton;
