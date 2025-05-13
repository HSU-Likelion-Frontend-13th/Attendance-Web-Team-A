import React from 'react'
import LoginHeader from '../../components/login/header/LoginHeader';
import LoginSession from '../../components/login/LoginSession';
import * as S from "./Login.style";

const Login = () => {
    return (
        <div>
        <LoginHeader />
        <LoginSession />
        </div>
    );
}

export default Login;
