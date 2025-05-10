import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing : border-box;
    }
    
    body {
        font-family: 'Pretendard', sans-serif;
        background-color: ${colors.backgroundColor};
    }
    button {
        cursor: pointer;
        padding: 0;
        outline: none; 
        border: none;
        background-color: transparent;
    }
`;

export default GlobalStyle;
