import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Box } from "../components/box";
import { Center } from "../components/center";

const stories = storiesOf("Components/Box", module);

stories.add("default", () => (
  <Center>
    <Box>{text("Content", "Default")}</Box>
  </Center>
));
