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
  
  body {
    --scrollbar-width: calc(100vw - 100%);
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
 * @param props - properties to configure
 * @param props.customScrollbars - Option to enable GNUI theme based styling for scrollbars.
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle customScrollbars={customScrollbars} />
    </>
  );
}
