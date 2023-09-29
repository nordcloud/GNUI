import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    testTimeout: 10000,
    teardownTimeout: 180000,
    clearMocks: true,
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: process.env.CI ? ["default"] : ["default", "verbose"],
  },
});
