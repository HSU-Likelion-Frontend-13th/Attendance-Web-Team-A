import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.37rem;
  font-size: 0.93rem;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 1.56rem;
    height: 1.56rem;
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
