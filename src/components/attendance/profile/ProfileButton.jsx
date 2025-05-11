import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const ProfileButton = ({ icon, label, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {icon}
      {label}
    </ButtonWrapper>
  );
};

export default ProfileButton;
