import React, { useEffect, useState } from "react";
import Header from "../../components/attendance/header/Header";
import * as S from "./Main.style";

import CourseInfo from "../../components/attendance/courseInfo/CourseInfo";
import AttendanceInfo from "../../components/attendance/attendanceInfo/AttendanceInfo";
import Profile from "../../components/attendance/profile/Profile";

const Main = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header timer={timer} />
      <S.MainContainer>
        <S.LeftColumn>
          <CourseInfo />
          <AttendanceInfo />
        </S.LeftColumn>
        <S.RightColumn>
          <Profile />
        </S.RightColumn>
      </S.MainContainer>
    </>
  );
};

export default Main;
