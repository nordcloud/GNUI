/**
 * Copyright 2023 Nordcloud Oy or its affiliates. All Rights Reserved.
 */

import {} from "styled-components";
import { CSSProp } from "styled-components";

interface DefaultTheme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<DefaultTheme>;
  }
}
