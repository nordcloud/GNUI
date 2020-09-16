import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const SetGlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');
  a, a:visited {
    text-decoration: none !important;
  }
`;
