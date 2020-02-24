import React from "react";
import { storiesOf } from "@storybook/react";
import { Text, Code } from "../components/text";

const stories = storiesOf("Components/Text", module);

stories.add("default", () => (
  <>
    <Text fontSize={4}>Lorem ipsum.</Text>
    <Code>Something</Code>
  </>
));
