import styled from "styled-components";
import c from "../../../styles/colors";

// CourseInfo
export const CourseInfoContainer = styled.div`
  width: 1136px;
  height: 354px;
  background-color: ${c.boxColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const CourseInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const CourseTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 52px;
`;

// CourseNameTime
export const CourseNameTimeWrapper = styled.div`
  width: 653px;
  height: 198px;
  display: flex;
  background-color: ${c.boxContentColor};
  border-radius: 40px;
`;

export const CourseColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 35px;
`;

export const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${c.black};
`;

export const SubText = styled.div`
  font-size: 30px;
  font-weight: 200;
  color: ${c.courseColor};
`;

export const SubRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
