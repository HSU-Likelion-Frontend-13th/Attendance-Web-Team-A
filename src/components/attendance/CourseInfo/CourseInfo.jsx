import React from "react";
import * as S from "./CourseInfo.style";

import BoxTitle from "../../BoxTitle";
import CourseNameTime from "./CourseNameTime";
import AttendanceButton from "./AttendanceButton";
import course from "../../../data/dummyCourse.json";
import { checkAttendanceTime } from "../../../utils/checkTime";
import { getAttendanceMessage } from "../../../utils/checkAttendance";

const CourseInfo = ({ timer, onAttendance }) => {
  let nowClass = course[3];
  const status = checkAttendanceTime(nowClass, timer);
  const { text, color } = getAttendanceMessage(status);

  return (
    <S.CourseInfoContainer>
      <S.CourseInfoWrapper>
        <S.CourseInfoContent>
          <BoxTitle width="287px" titleName={"현재 · 다음강의"} />
          <S.StatusText color={color}>{text}</S.StatusText>
        </S.CourseInfoContent>
        <S.CourseTimeContainer>
          <CourseNameTime course={nowClass} />
          <AttendanceButton
            course={nowClass}
            timer={timer}
            onAttendance={onAttendance}
          />
        </S.CourseTimeContainer>
      </S.CourseInfoWrapper>
    </S.CourseInfoContainer>
  );
};

export default CourseInfo;
