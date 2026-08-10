import { addons } from "@storybook/manager-api";
import NCTheme from "./theme";

addons.setConfig({
  theme: NCTheme,
  showNav: true,
  showPanel: true,
});
