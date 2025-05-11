import React from "react";
import * as S from "./Profile.style";
import BoxTitle from "../../BoxTitle";
import MyImage from "./MyImage";
import MyInfo from "./MyInfo";

const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.ProfileWrapper>
        <BoxTitle width="232px" titleName={"나의 프로필"} />
        <S.MyImageInfoContainer>
          <MyImage />
          <MyInfo />
        </S.MyImageInfoContainer>
      </S.ProfileWrapper>
    </S.ProfileContainer>
  );
};

export default Profile;
