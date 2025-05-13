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

// ----- 출석안내 스타일 함수 -----
export const getAttendanceMessage = (status) => {
  // unavailable
  if (status === "unavailable") {
    return {
      text: "현재는 출석체크 시간이 아닙니다!",
      color: "#EB3223",
    };
  }

  // attend, late, absent
  return {
    text: "출석체크가 시작되었습니다.",
    color: "#000000",
  };
};
