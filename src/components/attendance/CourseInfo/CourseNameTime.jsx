import React from "react";
import * as S from "./CourseInfo.style";

const ClassNameTime = () => {
  return (
    <S.CourseNameTimeWrapper>
      <S.CourseColumn>
        <S.MainText>강의명</S.MainText>
        <S.SubText>강의실</S.SubText>
      </S.CourseColumn>
      <S.CourseColumn>
        <S.MainText>강의시간</S.MainText>
        <S.SubRow>
          <S.SubText>분반</S.SubText>
          <S.SubText>교수님</S.SubText>
        </S.SubRow>
      </S.CourseColumn>
    </S.CourseNameTimeWrapper>
  );
};

export default ClassNameTime;
