import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      interop: "compat",
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      interop: "compat",
    },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: [
          "**/__tests__",
          "**/*.spec.tsx",
          "**/*.spec.ts",
          "./src/setupTests.ts",
        ],
      },
    }),
    resolve(),
    commonjs(),
  ],
  external: [
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.peerDependencies ?? {}),
  ],
};
