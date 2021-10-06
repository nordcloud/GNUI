import React from "react";
import { awsIcons } from "./icons/aws-resource";
import { cloudIcons } from "./icons/cloud-provider";
import { klarityIcons } from "./icons/klarity-resource";
import { menuIcons } from "./icons/menu";
import { osComponentsIcons } from "./icons/os-components";
import { osProviderIcons } from "./icons/os-provider";
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
  ...osProviderIcons,
  ...osComponentsIcons,
  default: <path />,
} as const;

export const getPath = (name: PathName) => {
  return paths[name] ?? paths["default"];
};

export type PathName = keyof typeof paths;
