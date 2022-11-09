import * as React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { resetCss } from "./reset";
import { scrollbarCustomStyles } from "./scrollbar";
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
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle customScrollbars={customScrollbars} />
    </>
  );
}
