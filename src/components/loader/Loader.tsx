import React from "react";
import { Box } from "../box";
import { Flex } from "../container";
import { Spinner } from "../spinner";
import { Text } from "../text";
import styled, { css } from "styled-components";
import theme from "../../theme";

export interface LoaderProps {
  inContent?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const LoaderPosition = styled.div<LoaderProps>`
  width: 14rem;
  position: fixed;
  z-index: ${theme.zindex.topoftheworld};
  top: ${(props) => (props.bottom ? "auto" : theme.spacing.spacing08)};
  bottom: ${(props) => (props.bottom ? theme.spacing.spacing08 : "auto")};
  left: 50%;
  margin-left: -7rem;

  ${({ left }) =>
    left &&
    css`
      margin-left: 0;
      left: ${theme.spacing.spacing08};
    `};

  ${({ right }) =>
    right &&
    css`
      margin-left: 0;
      margin-right: ${theme.spacing.spacing08};
      left: auto;
      right: 0;
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
