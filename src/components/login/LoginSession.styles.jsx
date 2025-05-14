import styled from "styled-components";

// LoginSession
export const LoginSessionWrapper = styled.div`
  margin-top: 149px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 49px;
`;

// LoginForm용
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
`;

export const LabelText = styled.label`
  width: 70px;
  font-size: 30px;
  font-weight: 400;
`;

export const CheckBoxWrapper = styled.div`
  margin-bottom: 21px;
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
    font-size: 40px;
    margin-right: 9px;
    vertical-align: middle;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 23px;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
