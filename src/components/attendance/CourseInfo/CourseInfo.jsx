import React from "react";
import * as S from "./CourseInfo.style";
import BoxTitle from "../../BoxTitle";
import CourseNameTime from "./CourseNameTime";
import AttendanceButton from "./AttendanceButton";
import course from "../../../data/dummyCourse.json";

const CourseInfo = () => {
  return (
    <S.CourseInfoContainer>
      <S.CourseInfoWrapper>
        <BoxTitle width="287px" titleName={"현재 · 다음강의"} />
        <S.CourseTimeContainer>
          <CourseNameTime course={course[5]} />
          <AttendanceButton />
        </S.CourseTimeContainer>
      </S.CourseInfoWrapper>
    </S.CourseInfoContainer>
  );
};

export default CourseInfo;
