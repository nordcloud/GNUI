import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "./global.css";

addDecorator(
  withInfo({
    header: true,
    styles: {}
  })
);

addParameters();
addDecorator(storyFn => <>{storyFn()}</>);
