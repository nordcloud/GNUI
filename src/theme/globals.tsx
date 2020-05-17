import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./index";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400,500,700&display=swap');
  html, body {

     font-family: ${theme.typography.fonts.body};
     background: ${theme.colors.lights[2]};
     color: ${theme.colors.primary};
     font-weight: ${theme.fontWeights.regular};
     line-height: ${theme.lineHeight};
  }
  code {
    font-family: ${theme.typography.fonts.monospace};
    font-weight: ${theme.fontWeights.regular};
  }
`;
