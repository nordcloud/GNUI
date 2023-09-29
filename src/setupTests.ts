import * as matchers from "@testing-library/jest-dom/matchers";
import { configure } from "@testing-library/react";
import { expect } from "vitest";

expect.extend(matchers);

configure({
  asyncUtilTimeout: 3000,
});
