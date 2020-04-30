import React from "react";
import { addDecorator } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./global.css";

addDecorator(
  withInfo({
    header: true,
    styles: {},
  })
);

addParameters({
  options: {
    showRoots: true,
  },
});

addDecorator((storyFn) => <>{storyFn()}</>);
