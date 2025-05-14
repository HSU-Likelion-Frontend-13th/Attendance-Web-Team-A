import React from "react";
import styled from "styled-components";
import c from "../styles/colors";

const ButtonContainer = styled.button`
  width: ${({ width }) => width || "15.99vw"};
  height: ${({ height }) => height || "4.75rem"};
  font-size: ${({ fontSize }) => fontSize || "2.19rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  background-color: ${c.confirmBtnColor};
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  cursor: pointer;
`;

// #014099 색상의 border-radius 20px인 버튼
const ConfirmButton = ({
  width,
  height,
  title,
  fontSize,
  fontWeight,
  onClick,
}) => {
  return (
    <ButtonContainer
      type="button"
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {title}
    </ButtonContainer>
  );
};

export default ConfirmButton;
