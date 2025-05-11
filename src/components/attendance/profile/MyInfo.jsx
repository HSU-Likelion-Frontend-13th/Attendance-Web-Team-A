import React from "react";
import * as S from "./Profile.style";
import ProfileButton from "./ProfileButton";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import user from "../../../data/dummyUser.json";

const MyInfo = () => {
  return (
    <S.MyInfoContainer>
      <S.UserInfo>
        <S.UserName>{user.name}</S.UserName>
        <S.UserTrack>{user.tracks.join(" / ")}</S.UserTrack>
      </S.UserInfo>
      <S.ButtonRow>
        <ProfileButton icon={<IoPersonSharp />} label="마이페이지" />
        <ProfileButton icon={<IoIosUnlock />} label="로그아웃" withBorder />
      </S.ButtonRow>
    </S.MyInfoContainer>
  );
};

export default MyInfo;
