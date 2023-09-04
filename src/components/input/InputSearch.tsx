import * as React from "react";
import styled from "styled-components";
import { SpaceProps } from "styled-system";
import { Button } from "../button";
import { Spinner } from "../spinner";
import { InputGroup, StyledInput } from "./styles";
import { StyledInputProps, StyledInputGroupProps } from "./types";

const ButtonWrapper = styled.div`
  margin: -0.25rem -0.25rem -0.25rem 0;
`;

type Props = SpaceProps &
  StyledInputGroupProps &
  StyledInputProps & {
    onSearch?: () => void;
  };

export const InputSearch = React.forwardRef<HTMLInputElement, Props>(
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
      icon = "search",
      ...props
    },
    ref
  ) => {
    return (
      <InputGroup status={status} noBorder={noBorder} popup={popup}>
        {loading && <Spinner />}
        <StyledInput
          ref={ref}
          type={type}
          popup={popup}
          small={small}
          onClick={onClick}
          {...props}
        />
        <ButtonWrapper>
          <Button size="md" severity="low" icon={icon} onClick={onSearch}>
            Search
          </Button>
        </ButtonWrapper>
      </InputGroup>
    );
  }
);
