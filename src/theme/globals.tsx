import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import theme from ".";
import { useThemeSwitcher } from "./switcher";
import { resetCss } from "./reset";

const GlobalStyle = createGlobalStyle`
  ${resetCss};

  html {
    font-size: 16px;
  }

  html, body {
     font-family: ${theme.typography.fonts.body};
     background: ${theme.color.background.body};
     color: ${theme.color.text.text01};
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

export const SetGlobalStyle = () => {
  useThemeSwitcher();
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
    </>
  );
};
