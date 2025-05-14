import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 464px;
  height: 74px;
  padding: 19px 35px;
  font-size: 30px;
  font-weight: 400;
  border: ${({ isError }) => (isError ? "1px solid #EB3223" : "none")};
  border-radius: 50px;
  background-color: ${({ isError }) =>
    isError ? "rgba(235, 50, 35, 0.3)" : "#D9D9D9"};
  outline: none;

  &::placeholder {
    color: #9e9e9e;
    font-size: 30px;
    font-weight: 400;
  }

  &:focus {
    border: 1px solid #9e9e9e;
  }
`;

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  id,
  isError,
}) => {
  return (
    <InputField
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isError={isError}
    />
  );
};

export default Input;
