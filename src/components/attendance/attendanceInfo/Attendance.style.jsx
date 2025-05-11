import styled from "styled-components";
import c from "../../../styles/colors";

// AttendanceInfo
export const AttendanceInfoContainer = styled.div`
  width: 1136px;
  height: 354px;
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
  gap: 28px;
`;

// AttendanceContent
export const ContentWrapper = styled.div`
  width: 1056px;
  height: 198px;
  display: flex;
  align-items: center;
  background-color: ${c.boxContentColor};
  border-radius: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 41px;
  margin: 0;
  gap: 14px;
  font-size: 30px;
`;

export const TextLine = styled.div`
  font-weight: 300;

  & > span {
    font-weight: 500;
  }
`;

export const Alert = styled.div`
  font-size: 25px;
  font-weight: 200;
  margin-top: 3px;
`;
