// -----출석 시간 판별 함수 -----
export const checkAttendanceTime = (course, timer) => {
  if (!course) return "vacation";

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
