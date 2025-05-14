import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.43rem;
  font-size: 1.43rem;
  font-weight: 500;
  color: #999999;
`;

const CheckBoxInput = styled.input`
  width: 2.08vw;
  height: 2.5rem;

  &:checked {
    background-color: #014099;
  }
`;

const CheckBox = ({ label = "자동 로그인" }) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput type="checkbox" />
      {label}
    </CheckBoxWrapper>
  );
};

export default CheckBox;
