import React from "react";
import * as S from "./CourseInfo.style";

const ClassNameTime = ({ course }) => {
  // course가 null일 때
  if (!course) {
    return (
      <S.CourseNameTimeWrapper>
        <S.NoCourseText>강의 정보가 없습니다</S.NoCourseText>
      </S.CourseNameTimeWrapper>
    );
  }

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
