import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./index";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400,500,700&display=swap');
  body {
     font-family: ${theme.fontFamily.regular};
     background: ${theme.colors.lights[0]};
     font-weight: ${theme.fontWeights.regular};
     letter-spacing: 0.1rem;
     line-height: 1.5rem;
  }
  code {
    font-family: ${theme.fontFamily.monospace};
    font-weight: ${theme.fontWeights.regular};
  }
`;
