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

export const CourseInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const StatusText = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: ${({ color }) => color};
`;

// CourseNameTime
export const NoCourseText = styled.div`
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;

export const CourseNameTimeWrapper = styled.div`
  width: 653px;
  height: 198px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: ${c.boxContentColor};
  border-radius: 40px;
`;

export const CourseColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 35px;
`;

export const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${c.black};
  max-width: 80%;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 2줄까지 보이기
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
