import theme from "../theme";

export const setColor = (color: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};
