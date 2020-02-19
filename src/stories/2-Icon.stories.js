import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Icon } from "../components/icon";

const stories = storiesOf("Components/Icon", module);

stories.add("statuses", () => (
  <>
    <Icon width="24px" height="22px" image="STATUS_ENABLED"></Icon>
    <Icon width="24px" height="22px" image="STATUS_DISABLED"></Icon>
    <Icon width="24px" height="22px" image="STATUS_WARNING"></Icon>
  </>
));

stories.add("cloud providers", () => (
  <>
    <Icon width="24px" height="24px" image="GCP"></Icon>
    <Icon width="24px" height="24px" image="AWS"></Icon>
    <Icon width="24px" height="24px" image="AZURE"></Icon>
  </>
));

stories.add("operating systems", () => (
  <>
    <Icon width="24px" height="24px" image="WINDOWS"></Icon>
    <Icon width="24px" height="24px" image="LINUX"></Icon>
  </>
));

stories.add("cloud services", () => (
  <>
    <Icon width="24px" height="24px" image="AWS_ASG"></Icon>
    <Icon width="24px" height="24px" image="AWS_EC2"></Icon>
    <Icon width="24px" height="24px" image="AWS_RDS"></Icon>
    <Icon width="24px" height="24px" image="AZURE_VM"></Icon>
    <Icon width="24px" height="24px" image="AZURE_VM_SCALE_SETS"></Icon>
    <Icon width="24px" height="24px" image="AZURE_SQL_SERVER"></Icon>
    <Icon width="24px" height="24px" image="AZURE_SQL_DATABASE"></Icon>
  </>
));
