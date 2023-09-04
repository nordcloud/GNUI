import {} from "styled-components";
import { CSSProp } from "styled-components";

interface DefaultTheme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
