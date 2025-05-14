import React from "react";
import * as S from "./LoginSession.styles";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";
import hansungLogo from "../../assets/images/hansung2.svg";

const LoginSession = () => {
  return (
    <S.LoginSessionWrapper>
      <Logo src={hansungLogo} width="28.90vw" height="7.81rem" />
      <LoginForm />
    </S.LoginSessionWrapper>
  );
};

export default LoginSession;
