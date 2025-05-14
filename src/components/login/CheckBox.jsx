import React, { useState } from "react";
import styled from "styled-components";
import CHECKBOX_OFF from "../../assets/images/check-normal.png";
import CHECKBOX_ON from "../../assets/images/check-selcet.png";

const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 0.43rem;
  font-size: 1.43rem;
  font-weight: 500;
  cursor: pointer;
`;

const CheckBoxImg = styled.img`
  width: 2.08vw;
`;

const CheckBoxLabel = styled.span`
  color: ${({ checked }) => (checked ? "#014099" : "#999999")};
`;

const CheckBox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <CheckBoxWrapper onClick={handleCheck}>
      <CheckBoxImg src={checked ? CHECKBOX_ON : CHECKBOX_OFF} alt="체크박스" />
      <CheckBoxLabel checked={checked}>{label}</CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
