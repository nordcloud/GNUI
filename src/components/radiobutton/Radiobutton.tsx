import * as React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { GnuiContainer, Flex } from "../container";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, labelText, ...props }, ref) => (
    <RadioFlexWrapper>
      <RadioContainer>
        <RadioInput ref={ref} type="radio" id={id} {...props} />
        <Fill />
      </RadioContainer>
      <label htmlFor={id}>{labelText}</label>
    </RadioFlexWrapper>
  )
);

export type RadioGroupProps = {
  children: React.ReactElement<React.ComponentProps<typeof Radio>>[];
  name: string;
};

export function RadioGroup({ children, name }: RadioGroupProps) {
  const [isChecked, setIsChecked] = React.useState(
    Array.isArray(children) && children[0].props.value
  );

  const hasNoChildren = Array.isArray(children) && children.length === 0;

  if (hasNoChildren) {
    return null;
  }

  return (
    <RadioWrapper role="radiogroup" name={name}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          ...element.props,
          checked: isChecked === element.props.value,
          onChange: () => setIsChecked(element.props.value),
        })
      )}
    </RadioWrapper>
  );
}

const RadioWrapper = styled(GnuiContainer)<{ name: string }>`
  position: relative;
`;

const RadioFlexWrapper = styled(Flex)`
  margin-bottom: ${theme.spacing.spacing04};

  label {
    cursor: pointer;
    margin-left: ${theme.spacing.spacing02};
    font-weight: ${theme.typography.fontWeights[0]};
  }
`;

const Fill = styled.div`
  background: ${theme.color.interactive.primary};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: ${theme.zindex.masked};

  &::before {
    content: "";
    opacity: 0;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
`;

const RadioInput = styled.input`
  opacity: 0;
  z-index: ${theme.zindex.sticky};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: 0.75rem;
      height: 0.75rem;
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`;

const RadioContainer = styled.div`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  flex: 0 0 1.25rem;
  cursor: pointer;

  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid ${theme.color.border.input};
    background: ${theme.color.background.ui02};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: ${theme.zindex.zero};
  }
`;
