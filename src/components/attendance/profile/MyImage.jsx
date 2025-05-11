import React from "react";
import * as S from "./Profile.style";
import PROFILE from "../../../assets/images/profile-image.png";

const MyImage = () => {
  return (
    <S.MyImageWrapper>
      <img src={PROFILE} alt="프로필사진" />
    </S.MyImageWrapper>
  );
};

export default MyImage;
