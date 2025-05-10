import styled from "styled-components";
import c from "../styles/colors";

const TitleBoxContainer = styled.div`
  width: ${(props) => props.width || "287px"};
  height: 61px;
  background-color: ${c.titleColor};
  color: ${c.white};
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${c.titleStrokeColor};
  border-radius: 100px;
`;

// 현재/다음강의, 출석시간안내, 나의프로필 타이틀
const BoxTitle = ({ width, titleName }) => {
  return <TitleBoxContainer width={width}>{titleName}</TitleBoxContainer>;
};

export default BoxTitle;
