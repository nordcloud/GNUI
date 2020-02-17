import React from "react";
import { addDecorator } from "@storybook/react";
import "./global.css";

addDecorator(storyFn => <>{storyFn()}</>);
