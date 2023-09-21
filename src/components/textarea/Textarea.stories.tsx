import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Textarea } from "./Textarea";

const meta: Meta = {
  title: "Forms/Textarea",
  component: Textarea,
};

export default meta;

export const Default: StoryObj = {
  render: () => <Textarea />,
  name: "default",
};

export const Small: StoryObj = {
  render: () => <Textarea small />,
  name: "small",
};

export const Status: StoryObj = {
  render: () => {
    const [status, setStatus] = useState("success");

    return (
      <GnuiContainer>
        <GnuiContainer>
          <Textarea status={status} />
        </GnuiContainer>
        <Spacer height="1rem" />
        <GnuiContainer>
          <Button
            size="small"
            color={status === "error" ? "danger" : "success"}
            onClick={() =>
              setStatus(status === "danger" ? "success" : "danger")
            }
          >
            Change status
          </Button>
        </GnuiContainer>
      </GnuiContainer>
    );
  },

  name: "status",
};

export const MaxCharCount: StoryObj = {
  render: () => {
    const [status, setStatus] = useState("success");

    return (
      <GnuiContainer>
        <GnuiContainer>
          <Textarea status={status} maxCharCount={100} />
        </GnuiContainer>
        <Spacer height="1rem" />
        <GnuiContainer>
          <Button
            size="small"
            color={status === "error" ? "danger" : "success"}
            onClick={() =>
              setStatus(status === "danger" ? "success" : "danger")
            }
          >
            Change status
          </Button>
        </GnuiContainer>
      </GnuiContainer>
    );
  },

  name: "maxCharCount",
};
