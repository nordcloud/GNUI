import React from "react";
import { Box } from "../box";
import { Flex } from "../container";
import { Spinner } from "../spinner";
import { Text } from "../text";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface LoaderProps {
  inContent?: boolean;
  position?: "top-left" | "top-right" | "bottom-right" | "bottom-center" | "bottom-left";
}

const changePosition = (position: string) => {
  let loaderPosition: string;
  switch (position) {
    case "top-left":
      loaderPosition = `
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    break;
    case "top-right":
      loaderPosition = `
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    break;
    case "bottom-right":
      loaderPosition = `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    break;
    case "bottom-center":
      loaderPosition = `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      `;
    break;
    case "bottom-left":
      loaderPosition = `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    break;
    default:
      loaderPosition = `
      top: ${theme.spacing.spacing08};
      left:50%;
      margin-left: -7rem;
      `
  }
  return loaderPosition;
};

const LoaderPosition = styled.div<LoaderProps>`
  width: 14rem;
  position: fixed;
  z-index: ${theme.zindex.topoftheworld};
  top: ${(theme.spacing.spacing08)};
  left: 50%;
  margin-left: -7rem;

  ${({ position }) => 
  position && css`
    ${changePosition(position)}
  `};
`;

export const Loader: React.FC<LoaderProps> = ({ inContent, ...props }) => {
  return (
    <>
      {inContent ? (
        <Flex>
          <Spinner />
          <Text weight="medium" tag="div" style={{ marginLeft: "1rem" }}>
            Loading ...
          </Text>
        </Flex>
      ) : (
        <LoaderPosition {...props}>
          <Box shadow="shadow04">
            <Flex>
              <Spinner ninja size="xl" />
              <div style={{ marginLeft: "1rem" }}>
                <Text size="sm" tag="div">
                  Please wait
                </Text>
                <Text weight="medium" tag="div">
                  Loading ...
                </Text>
              </div>
            </Flex>
          </Box>
        </LoaderPosition>
      )}
    </>
  );
};
