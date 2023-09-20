import { Heading } from ".";
import { GnuiContainer } from "../container";
import theme from "../../theme";

export default {
  title: "Typography/Heading",
  component: Heading,
};

export const Simple = {
  render: () => <Heading>Simple heading</Heading>,
  name: "simple",
};

export const Levels = {
  render: () => (
    <GnuiContainer>
      <Heading level={1}>Heading with level prop</Heading>
      <Heading level={2}>Heading with level prop</Heading>
      <Heading level={3}>Heading with level prop</Heading>
      <Heading level={4}>Heading with level prop</Heading>
      <Heading level={5}>Heading with level prop</Heading>
      <Heading level={6}>Heading with level prop</Heading>
    </GnuiContainer>
  ),

  name: "levels",
};

export const Margins = {
  render: () => (
    <GnuiContainer>
      <Heading level={4} marginBottom="spacing08">
        Heading with marginBottom prop: spacing08 (40px)
      </Heading>
      <Heading level={4} marginBottom="spacing07">
        Heading with marginBottom prop: spacing07 (32px)
      </Heading>
      <Heading level={4} marginBottom="spacing06">
        Heading with marginBottom prop: spacing06 (24px)
      </Heading>
      <Heading level={4} marginBottom="spacing05">
        Heading with marginBottom prop: spacing05 (20px)
      </Heading>
      <Heading level={4} marginBottom="spacing04">
        Heading with marginBottom prop: spacing04 (16px)
      </Heading>
      <Heading level={4} marginBottom="spacing03">
        Heading with marginBottom prop: spacing03 (12px)
      </Heading>
      <Heading level={4} marginBottom="spacing02">
        Heading with marginBottom prop: spacing02 (8px)
      </Heading>
      <Heading level={4} marginBottom="spacing01">
        Heading with marginBottom prop: spacing01 (4px)
      </Heading>
      <Heading level={4} marginBottom="spacing00">
        Heading with marginBottom prop: spacing00 (0)
      </Heading>
    </GnuiContainer>
  ),

  name: "margins",
};
