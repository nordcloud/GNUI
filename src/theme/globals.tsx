import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');
  body {
     font-family: 'Nunito Sans', sans-serif;
     background: #d8d8d8;
  }
  h1, h2, h3, h4, h5, h6 {
      font-family:"Montserrat", sans-serif;
  }
`;
