import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 464px;
  height: 74px;
  padding: 19px 35px;
  font-size: 30px;
  font-weight: 400;
  border: none;
  border-radius: 50px;
  background-color: #d9d9d9;
  outline: none;

  &::placeholder {
    color: #9e9e9e;
    font-size: 30px;
    font-weight: 400;
  }
`;

const Input = ({ type = "text", placeholder, value, onChange, id }) => {
  return (
    <InputField
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
