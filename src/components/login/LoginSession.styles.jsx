import styled from "styled-components";

// LoginSession
export const LoginSessionWrapper = styled.div`
  margin-top: 9.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.06rem;
`;

// LoginForm용
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.31rem;
`;

export const LabelText = styled.label`
  width: 3.64vw;
  font-size: 1.87rem;
  font-weight: 400;
`;

export const CheckBoxWrapper = styled.div`
  margin-bottom: 1.31;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eb3223;

  &.hidden {
    visibility: hidden;
  }

  svg {
    font-size: 2.5rem;
    margin-right: 0.56rem;
    vertical-align: middle;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1.43rem;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
