import { wInfo } from "../utils/wInfo";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "../components/input";

const stories = storiesOf("Components/Input", module);

stories.add(
  "simple",
  wInfo()(() => <Input />)
);

stories.add(
  "typed",
  wInfo()(() => <Input type="number" placeholder={100} />)
);

stories.add(
  "disabled",
  wInfo()(() => <Input disabled />)
);
