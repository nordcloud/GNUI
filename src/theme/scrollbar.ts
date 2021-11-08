import { css } from "styled-components";
import { color } from "./config";

export const scrollbarCustomStyles = css`
  html {
    scrollbar-face-color: ${color.support.grey};
    scrollbar-base-color: ${color.support.grey};
    scrollbar-highlight-color: ${color.support.grey};
    scrollbar-track-color: ${color.background.ui01};
    scrollbar-arrow-color: ${color.background.ui01};
    scrollbar-shadow-color: ${color.support.grey};
    scrollbar-dark-shadow-color: ${color.support.grey};
  }

  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: ${color.background.ui01};
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    background-color: ${color.support.grey};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner {
    background-color: ${color.background.ui01};
  }

  body * {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
  }
`;
