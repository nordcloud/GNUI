import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from ".";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
  html {
    font-size: 16px;
  }
  html, body {
     font-family: ${theme.typography.fonts.body};
     background: ${theme.colors.lights[2]};
     color: ${theme.colors.primary};
     font-weight: ${theme.fontWeights.regular};
     line-height: ${theme.lineHeight};
  }
  code {
    font-family: ${theme.typography.fonts.body};
    font-weight: ${theme.fontWeights.regular};
  }
`;
