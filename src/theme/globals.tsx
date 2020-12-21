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
     background: ${theme.color.background.body};
     color: ${theme.color.text.primary};
     font-weight: ${theme.fontWeights.regular};
     line-height: ${theme.lineHeight};
  }
  code {
    font-family: ${theme.typography.fonts.body};
    font-weight: ${theme.fontWeights.regular};
  }
  a {
    color: ${theme.color.interactive.link};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
      color: ${theme.color.interactive.link}
    }
  }
`;
