import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import CheckBox from "./CheckBox";
import ConfirmButton from "../ConfirmButton";
import * as S from "./LoginSession.styles";
import { RiErrorWarningLine } from "react-icons/ri";
import { useValid } from "../../hooks/useValid";

const LoginForm = () => {
  const [form, setForm] = useState({
    // 폼 입력 상태
    studentId: "",
    name: "",
  });
  const { errors, isValid } = useValid(form); // 폼 입력 유효성 검사
  const [isSubmitted, setIsSubmitted] = useState(false); // 로그인 버튼 누름 여부
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isValid.name || !isValid.studentId) return;

    navigate("/main");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <S.FormWrapper>
      <S.LabelRow>
        <S.LabelText htmlFor="name">이름</S.LabelText>
        <Input
          id="name"
          placeholder="이름을 입력하세요"
          value={form.name}
          onChange={handleChange}
          isError={isSubmitted && !isValid.name}
        />
      </S.LabelRow>

      <S.LabelRow>
        <S.LabelText htmlFor="studentId">학번</S.LabelText>
        <Input
          id="studentId"
          placeholder="학번을 입력하세요"
          value={form.studentId}
          onChange={handleChange}
          isError={isSubmitted && !isValid.studentId}
        />
      </S.LabelRow>

      <S.CheckBoxWrapper>
        <CheckBox label="자동로그인" />
      </S.CheckBoxWrapper>

      {/* 유효성 검사 오류 메세지 */}
      <S.ErrorWrapper
        className={
          isSubmitted && (!isValid.name || !isValid.studentId) ? "" : "hidden"
        }
      >
        <S.ErrorMessage>
          <RiErrorWarningLine />
          {errors.name || errors.studentId}
        </S.ErrorMessage>
      </S.ErrorWrapper>

      <S.ButtonWrapper>
        <ConfirmButton
          title="LOGIN"
          width="523px"
          height="91px"
          fontSize="40px"
          fontWeight="600"
          onClick={handleLogin}
        />
      </S.ButtonWrapper>
    </S.FormWrapper>
  );
};

export default LoginForm;
