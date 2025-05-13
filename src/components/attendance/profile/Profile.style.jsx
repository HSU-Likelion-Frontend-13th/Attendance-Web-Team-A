import styled from "styled-components";
import c from "../../../styles/colors";

// Profile
export const ProfileContainer = styled.div`
  width: 34.64vw;
  height: 22.13rem;
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
  gap: 1.75rem;
`;

export const MyImageInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1.56rem;
`;

// MyImage
export const MyImageWrapper = styled.div`
  width: 10.73vw;
  height: 12.88rem;
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
  width: 18.65vw;
  height: 12.38rem;
  background-color: ${c.boxContentColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bababa;
`;

export const UserInfo = styled.div`
  height: 8.55rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2.13rem;
  gap: 0.94rem;
`;

export const UserName = styled.div`
  font-size: 1.69rem;
  font-weight: 700;
`;

export const UserTrack = styled.div`
  font-size: 1.13rem;
  font-weight: 400;
`;

export const ButtonRow = styled.div`
  height: 3.83rem;
  display: flex;
  border-top: 1px solid #bababa;

  & > *:not(:first-child) {
    border-left: 1px solid #bababa;
  }
`;
