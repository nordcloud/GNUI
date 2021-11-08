import { css } from "styled-components";
import theme from ".";

export const scrollbarCustomStyles = css`
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
