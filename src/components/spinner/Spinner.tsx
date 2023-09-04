import * as React from "react";
import styled, { css } from "styled-components";
import { color as styledSystemColor } from "styled-system";
import theme from "../../theme";

export type SpinnerProps = {
  size?: "lg" | "md" | "sm" | "xl" | "xxl";
  color?: "danger" | "notification" | "success" | "warning" | "white";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  ninja?: boolean;
};

const ninjaImg =
  "data:image/gif;base64,R0lGODlhyADIAPcAANgpOdna3i00SWVqelxichsuRWgsQERKXX2BjigvRYmNmTY9UfDx8oGFkscqOvn5/Pz8/TI4TbgqO9zd4TcuQ0YtQpgrPZWZo1ktQZ6hq42QnJKVoaGkrjpBVW1ygagqPCkwRnl9i4SIlRQuRYgrPvr6+6WosXB1hAsTLNTV2q6wuSUsQr7Ax6mstXgsPxYdNbG0vCAnPsXGzJqdqN7f4+zs7vf4+BohOHZ6iCUtQ9DR1u7v8GBldZibphEZMWhtfCEuRNLU2B4lPPj4+ra5wP8nNeIpOUhOYcDCyebn69fY3OopOMjK0MbIzvT09s3O1PIoOMrM0ri6wQwvRry+xfz8/8LEyuHi5/P09aOmsPb29yIpQOnq7PLz9HN4hrq9xODh5Pj4+M7Q1dvc4PUoN/7+/vsoN+/w8kBHWk1SZebm6vLy9rS2vvDw9FJYaT1EV+Pk6N/g5ujp6/b3+vT0+NHT11ZcbVVabO3u8lFWaEpQYk5UZuLj5vb29iQrQevs8OXm6Fddbqyvt+rq7+Lk6MfJz+Tm6Ofo7NXW22twf+Pk5hwjOq+yusvN0qirs/woNuHi6OTl6ujq7JCTn+bn7Lm7wvT09f8oN+Pk6lRZa93e5Ozu8Nna4KuutuHi5Fleb/r7/ejq7rW4v+vr7S0uRPv7/RggN+0oOMLFzBsiOaeqsurr8AYOJ+jp7eLj6PgoN7CzvRceNuTl5oaKlsbJ0C4uQ0pQZPX19vHy87S2wFBVZ8vM1P3+/ri7w/X2+SouRPf3+GJneOzt8fPz9sPFyxMaMv4oNWJndxQcNBAXL7G0ug4WL/39/o6Snw8WL76/x9PV2+YpON/g44iLmOHi5fX2+k9VZxUbNPn5+hMbMsHDy0tRZP8oNhcfNhgfNxojOiMrQiAoPicvRP4oN/4oNvHy9uLj6ePj6BMbM+/v8+Li6BQcNfP09/Hx9f3+/fv7+/coN+Pj6fX1+ePj5kZMX/n6+hggOP///ycuRP8pNwAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MTI1ZDMzMi1iZjU2LTQyMjMtYWJkMS0zYmFjODJkMDMxM2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTMyM0VDMDhCNzkwMTFFQUJFNjRCMDNBOEIzNTgyNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTMyM0VDMDdCNzkwMTFFQUJFNjRCMDNBOEIzNTgyNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NGI2NzQ4NC1lNjg3LTQ4ZGMtYTdhNC1iMjQxMWMyMGE3NzgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmZmE5N2YzOC1jOWI5LTRkNGEtOWVkZi0wY2E3MjY0YTAxYTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWU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";

const getBorderWidth = (size: string) => {
  switch (size) {
    case "sm":
      return "1px";
    case "md":
      return "2px";
    case "lg":
      return "3px";
    case "xl":
      return "5px";
    case "xxl":
      return "8px";
    default:
      return "2px";
  }
};

const StyledRing = styled.div<SpinnerProps>`
  ${styledSystemColor};
  display: flex;
  position: relative;
  width: ${theme.iconSize.md};
  height: ${theme.iconSize.md};
  animation: chase 2.5s infinite linear both;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 2px solid ${theme.color.interactive.primary};
    border-radius: 50%;
    animation: ring 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.color.interactive.primary} transparent transparent
      transparent;

    &:nth-child(1) {
      animation-delay: -0.2s;
    }
    &:nth-child(2) {
      animation-delay: -0.15s;
    }
    &:nth-child(3) {
      animation-delay: -0.1s;
    }

    ${({ color }) =>
      color &&
      css`
        border-color: ${theme.colors[color]} transparent transparent transparent;
      `}
  }

  ${({ size }) =>
    size &&
    css`
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};

      div {
        border-width: ${getBorderWidth(size)};
      }
    `}

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Image = styled.img<SpinnerProps>`
  width: ${theme.iconSize.lg};
  height: ${theme.iconSize.lg};
  ${({ size }) =>
    size &&
    css`
      width: ${theme.iconSize[size]};
      height: ${theme.iconSize[size]};
    `}
`;

export function Spinner({ color, size, ninja }: SpinnerProps) {
  return (
    <>
      {ninja ? (
        <Image size={size} src={ninjaImg} />
      ) : (
        <StyledRing color={color} size={size}>
          <div />
          <div />
          <div />
        </StyledRing>
      )}
    </>
  );
}
