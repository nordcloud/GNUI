import theme from "../theme";

export const changeHue = (col: string, amt: number) => {
  const inlineColors = [
    "accent",
    "danger",
    "success",
    "warning",
    "notification"
  ];

  let color = inlineColors.includes(col) ? theme.colors[col] : col;
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  let num = parseInt(color, 16);
  let red = (num >> 16) + amt;

  if (red > 255) red = 255;
  else if (red < 0) red = 0;

  let blue = ((num >> 8) & 0x00ff) + amt;

  if (blue > 255) blue = 255;
  else if (blue < 0) blue = 0;

  let green = (num & 0x0000ff) + amt;

  if (green > 255) green = 255;
  else if (green < 0) green = 0;

  return (
    (usePound ? "#" : "") + (green | (blue << 8) | (red << 16)).toString(16)
  );
};

export const setColor = (color?: string) => {
  return color !== undefined && theme.colors[color]
    ? theme.colors[color]
    : color;
};
