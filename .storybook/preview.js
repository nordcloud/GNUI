import React from "react";
import { addDecorator } from "@storybook/react";
import "./global.css";

addDecorator(
  withInfo({
    header: true,
    inline: true,
    styles: {}
  })
);

addDecorator(storyFn => <>{storyFn()}</>);
