import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Box } from "../components/box";

const stories = storiesOf("Components/Box", module);

stories.add("default", () => <Box>{text("Content", "Default")}</Box>);
