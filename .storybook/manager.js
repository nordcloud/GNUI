import { addons } from "@storybook/addons";
import NCTheme from "./theme";

addons.setConfig({
  theme: NCTheme,
  showNav: true,
  showPanel: false,
});
