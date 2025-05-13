import React from "react";
import Logo from "../../Logo";
import Time from "./Time";
import hansung1Logo from "../../../assets/images/hansung1.svg";
import likelionLogo from "../../../assets/images/like-lion.svg";
import * as S from "./Header.style";

const Header = ({ timer }) => {
  return (
    <S.HeaderWrapper>
      <S.LogoContainer>
        <Logo src={hansung1Logo} width="153px" height="72px" />
        <Logo src={likelionLogo} width="171px" height="92px" />
      </S.LogoContainer>
      <Time timer={timer} />
    </S.HeaderWrapper>
  );
};

export default Header;
