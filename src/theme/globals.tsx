import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle, css } from "styled-components";
import { resetCss } from "./reset";
import { useThemeSwitcher } from "./switcher";
import theme from ".";

type Props = {
  customScrollbars?: boolean;
};

const GlobalStyle = createGlobalStyle<Props>`
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

  ${({ customScrollbars }) => customScrollbars && scrollbarCustomStyles}
`;

/**
 * Component for setting global styles using GNUI theme.
 * @param {boolean} [customScrollbars=false] - Option to enable GNUI theme based styling for scrollbars.
 */
export function SetGlobalStyle({ customScrollbars = false }: Props) {
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
      <GlobalStyle customScrollbars={customScrollbars} />
    </>
  );
}

const scrollbarCustomStyles = css`
  html {
    scrollbar-face-color: ${theme.color.support.grey};
    scrollbar-base-color: ${theme.color.support.grey};
    scrollbar-highlight-color: ${theme.color.support.grey};
    scrollbar-track-color: ${theme.color.background.ui01};
    scrollbar-arrow-color: ${theme.color.background.ui01};
    scrollbar-shadow-color: ${theme.color.support.grey};
    scrollbar-dark-shadow-color: ${theme.color.support.grey};
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: ${theme.color.background.ui01};
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: ${theme.color.support.grey};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
    background-color: ${theme.color.background.ui01};
  }

  body * {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
  }
`;
