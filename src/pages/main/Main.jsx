import React, { useState } from "react";
import Header from "../../components/attendance/header/Header";
import * as S from "./Main.style";

import CourseInfo from "../../components/attendance/courseInfo/CourseInfo";
import AttendanceInfo from "../../components/attendance/attendanceInfo/AttendanceInfo";
import Profile from "../../components/attendance/profile/Profile";
import Warning from "../../components/attendance/Warning";
import { useCurrentTime } from "../../hooks/useCurrentTime";

const Main = () => {
  const timer = useCurrentTime(); // 현재 시간
  const [showWarning, setShowWarning] = useState(false); // 경고창 유무

  // 경고창 제어 함수
  const handleAttendance = (isAllowed) => {
    if (!isAllowed) {
      setShowWarning(true);
    }
  };

  return (
    <>
      <Header timer={timer} />
      <S.MainContainer>
        <S.LeftColumn>
          <CourseInfo timer={timer} onAttendance={handleAttendance} />
          <AttendanceInfo />
        </S.LeftColumn>
        <S.RightColumn>
          <Profile />
        </S.RightColumn>
      </S.MainContainer>
      {showWarning && <Warning onConfirm={() => setShowWarning(false)} />}
    </>
  );
};

export default Main;
