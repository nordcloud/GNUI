import React from "react";
import { awsIcons } from "./icons/aws-resource";
import { cloudIcons } from "./icons/cloud-provider";
import { klarityIcons } from "./icons/klarity-resource";
import { menuIcons } from "./icons/menu";
import { uiIcons } from "./icons/ui";

export const getViewBox = (name: string) => {
  switch (name) {
    default:
      return "0 0 24 24";
  }
};

export const paths = {
  ...awsIcons,
  ...cloudIcons,
  ...klarityIcons,
  ...menuIcons,
  ...uiIcons,
  default: <path />,
} as const;

export const getPath = (name: keyof typeof paths) => {
  return paths[name] ?? paths["default"];
};
