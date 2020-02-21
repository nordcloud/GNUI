import { storiesOf } from "@storybook/react";
import * as React from "react";
import SnowStorm from "react-snowstorm";

const stories = storiesOf("Components/Snow", module);

stories.add("default", () => <SnowStorm />);
