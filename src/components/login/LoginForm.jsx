import React from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import ConfirmButton from "../ConfirmButton";
import * as S from "./LoginSession.styles";


const LoginForm = () => {
    return (
        <S.FormWrapper>
            <S.LabelRow>
            <S.LabelText htmlFor="name">이름</S.LabelText>
            <Input id="name" placeholder="이름을 입력하세요" />
            </S.LabelRow>

            <S.LabelRow>
            <S.LabelText htmlFor="studentId">학번</S.LabelText>
            <Input id="studentId" placeholder="학번을 입력하세요" />
            </S.LabelRow>

            <S.CheckBoxWrapper>
            <CheckBox label="자동로그인" />
            </S.CheckBoxWrapper>

            <S.ButtonWrapper>
            <ConfirmButton title="LOGIN" width="523px" height="91px" />
            </S.ButtonWrapper>
        </S.FormWrapper>
    );
};

export default LoginForm;
