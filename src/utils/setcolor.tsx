import theme from "../theme";
import { SingleColors } from "../theme/config";

export const setColor = (color: SingleColors) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};
