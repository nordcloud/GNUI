import * as React from "react";
import { SpaceProps } from "styled-system";
import { Spinner } from "../spinner";
import { SVGIcon } from "../svgicon";
import { Clear, InputGroup, StyledInput } from "./styles";
import { StyledInputGroupProps, StyledInputProps } from "./types";

type Props = StyledInputGroupProps & StyledInputProps & SpaceProps;

export const InputPassword = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            noBorder,
            popup,
            status,
            loading,
            onClick,
            small,
            showClearButton,
            onClear = () => undefined,
            icon,
            children,
            ...props
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = React.useState(false);

        return (
            <InputGroup status={status} noBorder={noBorder} popup={popup}>
                <StyledInput
                    type={showPassword ? "text" : "password"}
                    onClick={onClick}
                    popup={popup}
                    small={small}
                    ref={ref}
                    {...props}
                />
                <Clear
                    onClick={() => setShowPassword((prev) => !prev)}
                    title={showPassword ? "Hide password" : "Show password"}
                    role="button"
                >
                    <SVGIcon size="md" name={showPassword ? "eye" : "eyeClose"} />
                </Clear>
            </InputGroup>
        );
    }
);
