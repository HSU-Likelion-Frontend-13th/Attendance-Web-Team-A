import styled from "styled-components";
import c from "../../../styles/colors";

// AttendanceInfo
export const AttendanceInfoContainer = styled.div`
  width: 59.16vw;
  height: 22.12rem;
  background-color: ${c.boxColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const AttendanceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

// AttendanceContent
export const ContentWrapper = styled.div`
  width: 55vw;
  height: 12.37rem;
  display: flex;
  align-items: center;
  background-color: ${c.boxContentColor};
  border-radius: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.56rem;
  margin: 0;
  gap: 0.87rem;
  font-size: 1.87rem;
`;

export const TextLine = styled.div`
  font-weight: 300;

  & > span {
    font-weight: 500;
  }
`;

export const Alert = styled.div`
  font-size: 1.56rem;
  font-weight: 200;
  margin-top: 0.18rem;
`;
