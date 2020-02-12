import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../utils/wInfo";
import { Box } from "../components/box";
import { SetGlobalStyle } from "../theme/globals";

const stories = storiesOf("Components/Box", module);

stories.add(
  "default",
  wInfo()(() => (
    <>
      <SetGlobalStyle />
      <Box>this is content</Box>
    </>
  ))
);
