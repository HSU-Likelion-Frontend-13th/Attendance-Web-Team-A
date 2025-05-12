import React from "react";
import styled from "styled-components";
import c from "../../styles/colors";
import WARNING from "../../assets/images/warning.png";
import ConfirmButton from "../ConfirmButton";

const WarningContainer = styled.div`
  width: 1315px;
  height: 507px;
  background-color: ${c.backgroundColor};
  border: solid 1px ${c.boxColor};
  border-radius: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 63px;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
`;

const WarningImage = styled.img`
  width: 119px;
  height: 119px;
`;

const WarningMessage = styled.div`
  font-size: 60px;
  font-weight: 400;
  color: #979797;
  line-height: 1.6;
`;

const ButtonRow = styled.div`
  position: absolute;
  bottom: 47px;
  right: 46px;
`;

const Warning = () => {
  return (
    <WarningContainer>
      <ContentRow>
        <WarningImage src={WARNING} alt="Warning" />
        <WarningMessage>
          현재는 출석 체크 시간이 아닙니다.
          <br />
          시간을 확인 하시고 다시 출석 해주세요.
        </WarningMessage>
      </ContentRow>
      <ButtonRow>
        <ConfirmButton title="확인" />
      </ButtonRow>
    </WarningContainer>
  );
};

export default Warning;
