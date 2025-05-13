// -----출석 시간 판별 함수 -----
export const checkAttendanceTime = (course, timer) => {
  const [startHour, startMin] = course.startTime.split(":").map(Number);
  const [endHour, endMin] = course.endTime.split(":").map(Number);

  // 수업 시작 시간
  const classStart = new Date(timer);
  classStart.setHours(startHour, startMin, 0, 0);

  // 수업 종료 시간
  const classEnd = new Date(timer);
  classEnd.setHours(endHour, endMin, 0, 0);

  const diffMin = (timer - classStart) / (1000 * 60);
  const untilEndMin = (classEnd - timer) / (1000 * 60);

  // 수업 종료 10분 전: 출석 불가
  if (untilEndMin < 10) return "unavailable";

  if (diffMin >= -5 && diffMin < 5) return "attend";
  if (diffMin >= 5 && diffMin < 15) return "late";
  if (diffMin >= 15) return "absent";

  // 출석 가능 시간 아님
  return "unavailable";
};

// ----- 출석버튼 스타일 함수 -----
export const getAttendanceStyle = (status, clicked, c) => {
  if (!clicked || status === "unavailable") {
    return {
      bgColor: c.boxContentColor,
      text: "출석하기",
    };
  }

  // 출석, 지각, 결석에 따른 배경색과 텍스트
  const map = {
    attend: { bgColor: "#014099", text: "출석완료" },
    late: { bgColor: "#FF8F5C", text: "지\u00A0\u00A0\u00A0각" },
    absent: { bgColor: "#EB4A3D", text: "결\u00A0\u00A0\u00A0석" },
  };

  return {
    ...map[status],
    textColor: c.white,
  };
};
