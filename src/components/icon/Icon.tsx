import React from "react";
import styled, {css} from "styled-components";
import theme from "../../theme"

interface IconProps {

}

const StyledIcon = styled.div<IconProps>``;

export const Icon: React.FC<IconProps> = (props) => {
    return (
        <StyledIcon></StyledIcon>
    )
}