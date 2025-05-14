import React from "react";
import Logo from "../../../components/Logo";
import * as S from "./LoginHeader.styles";
import likelionLogo from "../../../assets/images/like-lion.svg";

const LoginHeader = () => {
  return (
    <div>
      <S.LoginHeaderWrapper>
        <Logo src={likelionLogo} width="7.76vw" height="5rem" />
      </S.LoginHeaderWrapper>
    </div>
  );
};

export default LoginHeader;
