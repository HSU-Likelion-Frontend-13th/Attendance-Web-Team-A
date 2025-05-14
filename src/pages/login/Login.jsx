import React from 'react'
import LoginHeader from '../../components/login/header/LoginHeader';
import LoginSession from '../../components/login/LoginSession';
import * as S from "./Login.style";

const Login = () => {
    return (
        <S.LoginPageWrapper>
        <LoginHeader />
        <LoginSession />
        </S.LoginPageWrapper>
    );
}

export default Login;
