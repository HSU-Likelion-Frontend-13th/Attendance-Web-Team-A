import React from "react";
import styled from "styled-components";

const LogoImage = styled.img`
  display: block;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  max-width: ${(props) => props.$maxWidth || "8rem"};
  object-fit: contain;
`;

// 로고
// $: DOM에 전달되지 않고 스타일에만 사용
const Logo = ({ src, width, height }) => {
  return <LogoImage src={src} alt="logo" $width={width} $height={height} />;
};

export default Logo;
