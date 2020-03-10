import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Tag } from "../components/tag";

const stories = storiesOf("Components/Tag", module);

stories.add("statuses", () => (
  <>
    <Tag className="success" text="success"/>
    <Tag className="warning" text="in progress"/>
    <Tag className="danger" text="failed"/>
    <Tag className="info" text="starting"/>
    <Tag className="" text="no data"/>
    <Tag className="default" text="default"/>
  </>
));
