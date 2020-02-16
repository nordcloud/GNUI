import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../utils/wInfo";
import { Box } from "../components/box";
import { Center } from "../components/center";

const stories = storiesOf("Components/Box", module);

stories.add(
  "default",
  wInfo()(() => (
    <Center>
      <Box>{text("Content", "Default")}</Box>
    </Center>
  ))
);
