import React from "react";
import * as S from "./Attendance.style";
import AttendanceContent from "./AttendanceContent";
import BoxTitle from "../../BoxTitle";

const AttendanceInfo = () => {
  return (
    <S.AttendanceInfoContainer>
      <S.AttendanceInfoWrapper>
        <BoxTitle width="287px" titleName={"출석 시간 안내"} />
        <AttendanceContent />
      </S.AttendanceInfoWrapper>
    </S.AttendanceInfoContainer>
  );
};

export default AttendanceInfo;
