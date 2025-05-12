import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 47px 0px 40px;
  height: 254px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
`;

export const TimeLabel = styled.div`
  font-size: 30px;
  font-weight: 400;
`;

export const TimeText = styled.div`
  font-size: 70px;
  font-weight: 700;
`;
