import React from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 23px;
    font-weight: 500;
    color: #999999;
`;

const CheckBoxInput = styled.input`
    width: 40px;
    height: 40px;
    border-radius: 50%;

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
