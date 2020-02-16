import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(
  withInfo({
    header: true,
    inline: true,
    styles: {}
  })
);
