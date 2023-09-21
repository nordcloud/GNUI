import theme from "../theme";
import { SingleColors } from "../theme/config";

export const setColor = (color: SingleColors | (string & {})) => {
  return color !== undefined && isSingleColor(color)
    ? theme.colors[color]
    : color;
};

function isSingleColor(
  color: SingleColors | (string & {})
): color is SingleColors {
  return Object.keys(theme.colors).includes(color);
}
