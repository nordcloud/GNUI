import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

configure({
  asyncUtilTimeout: 3000,
});
