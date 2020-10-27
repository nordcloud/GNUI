import React from "react";
import { Box } from "../box";
import { Flex } from "../container";
import { Spinner } from "../spinner";
import { Text } from "../text";
import styled, { css } from "styled-components/macro";
import theme from "../../theme";

export type LoaderProps = {
  inContent?: boolean;
  isBackground?: boolean;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
};

const changePosition = (position: string) => {
  switch (position) {
    case "top-left":
      return `
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    case "top-right":
      return `
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    case "bottom-right":
      return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: auto;
      right: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    case "bottom-center":
      return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      `;
    case "bottom-left":
      return `
      top: auto;
      bottom: ${theme.spacing.spacing08};
      left: ${theme.spacing.spacing08};
      margin-left: 0;
      `;
    default:
      return `
      top: ${theme.spacing.spacing08};
      left:50%;
      margin-left: -7rem;
      `;
  }
};

const LoaderPosition = styled.div<LoaderProps>`
  width: 14rem;
  position: fixed;
  z-index: ${theme.zindex.topoftheworld};
  top: ${theme.spacing.spacing08};
  left: 50%;
  margin-left: -7rem;
  ${({ position }) =>
    position &&
    css`
      ${changePosition(position)}
    `};
`;
const LoaderOverlay = styled.div<LoaderProps>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: ${theme.zindex.topoftheworld};
`;

export const Loader: React.FC<LoaderProps> = ({
  inContent,
  isBackground,
  ...props
}) => {
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
      {!inContent && isBackground && (
        <LoaderOverlay isBackground={isBackground}>
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
        </LoaderOverlay>
      )}
    </>
  );
};
