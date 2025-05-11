import React from "react";
import * as S from "./Profile.style";
import user from "../../../data/dummyUser.json";

const MyImage = () => {
  return (
    <S.MyImageWrapper>
      <img src={user.profileImage} alt="프로필사진" />
    </S.MyImageWrapper>
  );
};

export default MyImage;
