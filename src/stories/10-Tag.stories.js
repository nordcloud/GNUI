import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tag } from "../components/tag";

const stories = storiesOf("Components/Tag", module);

stories.add("statuses", () => (
  <>
    <Tag color="success" text="success"/>
    <Tag color="warning" text="in progress"/>
    <Tag color="danger" text="failed"/>
    <Tag color="notification" text="starting"/>
    <Tag color="primary" text="default"/>
    <Tag color="" text=""/>
  </>
));
