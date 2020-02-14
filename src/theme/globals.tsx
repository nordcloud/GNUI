import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./index";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,600,700&display=swap');
  body {
     font-family: 'Roboto', sans-serif;
     background: ${theme.colors.light};
     font-weight: ${theme.fontWeights.regular};
  }
  h1, h2, h3, h4, h5, h6 {
      font-family:"Montserrat", sans-serif;
      color: ${theme.colors.primary}
  }
  h1, h2 {
    font-weight: ${theme.fontWeights.medium};
  }
  h3, h4, h5, h6 {
    font-weight: ${theme.fontWeights.bold};
  }
`;
