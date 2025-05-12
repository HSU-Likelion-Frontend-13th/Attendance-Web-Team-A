import React from "react";
import * as S from "./Main.style";

import CourseInfo from "../../components/attendance/courseInfo/CourseInfo";
import AttendanceInfo from "../../components/attendance/attendanceInfo/AttendanceInfo";
import Profile from "../../components/attendance/profile/Profile";

const Main = () => {
  return (
    <>
      {/* <Header /> */}
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
