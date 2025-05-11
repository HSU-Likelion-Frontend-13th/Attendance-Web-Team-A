import React from "react";
import * as S from "./Profile.style";
import ProfileButton from "./ProfileButton";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";

const MyInfo = () => {
  return (
    <S.MyInfoContainer>
      <S.UserInfo>
        <S.UserName>이지민</S.UserName>
        <S.UserTrack>동양화과 / 미디어 디자인 트랙</S.UserTrack>
      </S.UserInfo>
      <S.ButtonRow>
        <ProfileButton icon={<IoPersonSharp />} label="마이페이지" />
        <ProfileButton icon={<IoIosUnlock />} label="로그아웃" withBorder />
      </S.ButtonRow>
    </S.MyInfoContainer>
  );
};

export default MyInfo;
