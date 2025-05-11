import React from "react";
import styled from "styled-components";
import Logo from "../../Logo";
import hansung1Logo from "../../../assets/images/hansung1.svg";
import likelionLogo from "../../../assets/images/like-lion.svg";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    height: 254px;
`;

// 로고 2개
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoContainer>
            <Logo src={hansung1Logo} width="153px" height="72px" />
            <Logo src={likelionLogo} width="171px" height="92px" />
            </LogoContainer>
        </HeaderWrapper>
    );
};

export default Header;
