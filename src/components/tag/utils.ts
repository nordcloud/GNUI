import theme from "../../theme";
import { SingleColors, ThemeColors } from "../../theme/config";

function isSingleColor(
  value: SingleColors | ThemeColors
): value is SingleColors {
  return [
    "primary",
    "accent",
    "danger",
    "success",
    "warning",
    "notification",
    "black",
    "white",
    "snowWhite",
  ].includes(value);
}
function isThemeSupportColor(
  value: SingleColors | ThemeColors
): value is ThemeColors {
  return [
    "red",
    "redInverse",
    "pink",
    "purple",
    "indigo",
    "blue",
    "blueInverse",
    "grey",
    "greyInverse",
    "cyan",
    "teal",
    "green",
    "greenInverse",
    "lightGreen",
    "yellow",
    "orange",
    "orangeInverse",
  ].includes(value);
}

export const checkColor = (color: SingleColors | ThemeColors) => {
  if (color && isSingleColor(color)) {
    return theme.colors[color];
  }
  if (color && isThemeSupportColor(color)) {
    return theme.color.support[color];
  }
  return color;
};

export const checkColorForPolished = (
  polishedColor: SingleColors | ThemeColors
) => {
  return isSingleColor(polishedColor)
    ? checkColor(polishedColor)
    : polishedColor;
};
