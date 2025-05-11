import React from "react";
import * as S from "./CourseInfo.style";

const ClassNameTime = ({ course }) => {
  return (
    <S.CourseNameTimeWrapper>
      <S.CourseColumn>
        <S.MainText>{course.name}</S.MainText>
        <S.SubText>{course.location}</S.SubText>
      </S.CourseColumn>
      <S.CourseColumn>
        <S.MainText>{`${course.startTime}~${course.endTime}`}</S.MainText>
        <S.SubRow>
          <S.SubText>{course.section}</S.SubText>
          <S.SubText>{course.professor}</S.SubText>
        </S.SubRow>
      </S.CourseColumn>
    </S.CourseNameTimeWrapper>
  );
};

export default ClassNameTime;
