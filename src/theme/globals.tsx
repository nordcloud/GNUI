import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./index";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400,500,700&display=swap');
  html, body, table {

     font-family: ${theme.typography.fonts.body};
     background: ${theme.colors.white};
     color: ${theme.colors.primary};
     font-weight: ${theme.fontWeights.regular};
     letter-spacing: 0.1rem;
     line-height: ${theme.lineHeight};
  }
  code {
    font-family: ${theme.fontFamily.monospace};
    font-weight: ${theme.fontWeights.regular};
  }
`;
