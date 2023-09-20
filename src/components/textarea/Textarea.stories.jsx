import { Textarea } from ".";
import { GnuiContainer } from "../container";
import { Spacer } from "../spacer";
import { Button } from "../button";
import theme from "../../theme";

export default {
  title: "Forms/Textarea",
  component: Textarea,
};

export const Default = {
  render: () => <Textarea />,
  name: "default",
};

export const Small = {
  render: () => <Textarea small />,
  name: "small",
};

export const Status = {
  render: () => {
    const [status, setStatus] = React.useState("success");

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

export const MaxCharCount = {
  render: () => {
    const [status, setStatus] = React.useState("success");

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
