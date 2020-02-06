import React from "react";

import { Button } from "../components";

export default {
  title: "Button",
  component: Button
};

export const Normal = () => <Button>Hello Button</Button>;

export const Primary = () => <Button primary>Hello Button</Button>;
