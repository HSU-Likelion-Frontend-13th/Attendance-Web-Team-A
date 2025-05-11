import React from "react";
import styled from "styled-components";
import c from "../../../styles/colors";

const ButtonContainer = styled.div`
  width: 349px;
  height: 191px;
  background-color: ${c.boxContentColor};
  color: ${c.black};
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
`;

// 출석하기 버튼
const Button = () => {
  return <ButtonContainer>출석하기</ButtonContainer>;
};

export default Button;
