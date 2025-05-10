import React from "react";
import * as S from "./Attendance.style";

const AttendanceContent = () => {
  return (
    <S.ContentWrapper>
      <S.TextContainer>
        <S.TextLine>
          <span>출석 인정 시간</span> : 수업 시작 5분 전 ~ 수업시간 5분 후
        </S.TextLine>
        <S.TextLine>
          <span>지각 시간</span> : 수업 시작 5분 후 ~ 15분 까지
        </S.TextLine>
        <S.Alert>*이후에는 결석으로 처리됩니다</S.Alert>
      </S.TextContainer>
    </S.ContentWrapper>
  );
};

export default AttendanceContent;
