import styled from "styled-components";
import c from "../../../styles/colors";

// Profile
export const ProfileContainer = styled.div`
  width: 665px;
  height: 354px;
  background-color: ${c.boxColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const MyImageInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
`;

// MyImage
export const MyImageWrapper = styled.div`
  width: 206px;
  height: 206px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${c.boxContentColor};
  border-radius: 20px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// MyInfo
export const MyInfoContainer = styled.div`
  width: 358px;
  height: 198px;
  background-color: ${c.boxContentColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
`;

export const UserInfo = styled.div`
  height: 136.75px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 34px;
  gap: 15px;
`;

export const UserName = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

export const UserTrack = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const ButtonRow = styled.div`
  height: 61.25px;
  display: flex;
  border-top: 1px solid #bababa;

  & > *:not(:first-child) {
    border-left: 1px solid #bababa;
  }
`;
