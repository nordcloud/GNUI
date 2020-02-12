import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../utils/wInfo";
import { Box } from "../components/box";

const stories = storiesOf("Components/Box", module);

stories.add(
  "default",
  wInfo()(() => <Box>{text("Content", "Default")}</Box>)
);
