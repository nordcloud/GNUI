import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tag } from "../components/tag";

const stories = storiesOf("Components/Tag", module);

stories.add("statuses", () => (
  <>
    <Tag color="success" text="success"/>
    <Tag color="warning" text="in progress"/>
    <Tag color="danger" text="failed"/>
    <Tag color="info" text="starting"/>
    <Tag color="default" text="default"/>
    <Tag color="" text=""/>
  </>
));
