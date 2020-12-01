import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";
import { InputGroupProps, InputProps } from "./types";
import { InputGroup, StyledInput } from "./Input";
import { Text } from "../text";
import { SpaceProps } from "styled-system";

const ButtonSearch = styled.button`
  position: absolute;
  top: ${theme.spacing.spacing01};
  right: ${theme.spacing.spacing01};
  bottom: ${theme.spacing.spacing01};
  background-color: ${theme.colors.lights[1]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.md};
  outline: none;
  transition: ${theme.transition};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const IconSearch = styled.div`
  transform: scaleX(-1) scale(0.75) translateX(5px);
`;

type InputSearch = {
  onSearch?: () => void;
};

export const InputSearch: React.FC<
  InputGroupProps & InputProps & SpaceProps & InputSearch
> = React.forwardRef(
  (
    {
      noBorder,
      type,
      popup,
      status,
      loading,
      onClick,
      onSearch,
      small,
      showClearButton,
      onClear = () => undefined,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        {loading && <Spinner />}
        <StyledInput
          type={type}
          onClick={onClick}
          popup={popup}
          small={small}
          ref={ref}
          {...props}
        />
        <ButtonSearch onClick={onSearch}>
          <IconSearch>
            <SVGIcon size="md" name="search" />
          </IconSearch>
          <Text tag="span" size="sm">
            Search
          </Text>
        </ButtonSearch>
      </InputGroup>
    );
  }
);
