import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Icon } from "../components/icon";
import { Center } from "../components/center";

const stories = storiesOf("Components/Icon", module);

stories.add("status - enabled", () => (
  <Center>
    <Icon width="24px" height="22px" image="STATUS_ENABLED"></Icon>
  </Center>
));

stories.add("status - disabled", () => (
  <Center>
    <Icon width="24px" height="22px" image="STATUS_DISABLED"></Icon>
  </Center>
));
