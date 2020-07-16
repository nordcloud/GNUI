import React from "react";
import styled, {css} from "styled-components";
import theme from "../../theme";
import {getViewBox} from "../../utils/svgicons";
import {getPath} from "../../utils/svgicons";

export interface SVGIconProps {
    name: string;
    fill?: "success" | "danger" | "warning" | "notification" | "white",
    size?: "sm" | "md" | "lg" | "xl" | "xxl"
}

const StyledSVGIcon = styled.svg<SVGIconProps>`
    fill: ${theme.colors.primary};
    width: ${theme.iconsize.md};
    height: ${theme.iconsize.md};
    
    ${({fill}) =>
    fill && css`
        fill: ${theme.colors[fill]};
    `}
    
    ${({size}) =>
    size && css`
        width: ${theme.iconsize[size]};
        height: ${theme.iconsize[size]};
    `}
`;

export const SVGIcon: React.FC<SVGIconProps> = (props) => {
    const ViewBox = getViewBox(props.name);
    const Path = getPath(props.name);
    return (
        <StyledSVGIcon
            {...props}
            viewBox = {ViewBox}
            xmlns = "http://www.w3.org/2000/svg"
            xmlnsXlink = "http://www.w3.org/1999/xlink"
        >
            {Path}
        </StyledSVGIcon>
    );
};


