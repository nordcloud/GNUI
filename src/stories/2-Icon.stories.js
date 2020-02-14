import { storiesOf } from "@storybook/react";
import * as React from "react";
import { wInfo } from "../utils/wInfo";
import { Icon } from "../components/icon";

const stories = storiesOf("Components/Icon", module);

stories.add(
  "status - enabled",
  wInfo()(() => <Icon width="24px" height="22px" image="STATUS_ENABLED"></Icon>)
);

stories.add(
  "status - disabled",
  wInfo()(() => (
    <Icon width="24px" height="22px" image="STATUS_DISABLED"></Icon>
  ))
);

stories.add(
  "cloud providers",
  wInfo()(() => (
    <>
      <Icon width="24px" height="24px" image="GCP"></Icon>
      <Icon width="24px" height="24px" image="AWS"></Icon>
      <Icon width="24px" height="24px" image="AZURE"></Icon>
    </>
  ))
);
