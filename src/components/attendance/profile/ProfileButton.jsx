import React from "react";
import { useNavigate } from "react-router-dom";
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

const ProfileButton = ({ icon, label, to }) => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper onClick={() => navigate(to)}>
      {icon}
      {label}
    </ButtonWrapper>
  );
};

export default ProfileButton;
