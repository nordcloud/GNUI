import { defineConfig, globalIgnores } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "./*.js",
    "**/vitest.config.ts",
    "!**/.*",
    "**/build",
    "**/coverage",
    "**/dist",
    "**/node_modules",
    "**/storybook-static",
]), {
    extends: compat.extends(
        "@nordcloud/eslint-config-pat/profile/web-app",
        "@nordcloud/eslint-config-pat/mixins/react",
    ),

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            tsconfigRootDir: __dirname,
        },
    },

    settings: {
        react: {
            version: "detect", // React version. "detect" automatically picks the version you have installed.
        },
    },
}, {
    files: ["**/*.{js,mjs}"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "module",
    },
}, {
    files: ["src/**/*.{ts,tsx}"],

    rules: {
        // Should be in sync with https://github.com/nordcloud/eslint-config-pat/blob/master/profile/_common.js#L463
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "default",
            format: null,
            // Ignore destructured names
        }, {
                selector: "variable",
                types: ["array", "boolean", "function", "number", "string"],
                modifiers: ["destructured"],
                format: null,
            }, {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "are", "should", "has", "can", "did", "will", "show", "hide"],
            }, {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            }, {
                selector: "parameter",
                format: ["camelCase"],
                leadingUnderscore: "allow",

                filter: {
                    regex: "^(Component)$",
                    match: false,
                },
            }, {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            }, {
                selector: ["function"],
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "forbid",
            }, {
                selector: ["typeProperty"],
                format: ["camelCase"],
                leadingUnderscore: "allowDouble",

                filter: {
                    regex: "^(Component)$",
                    match: false,
                },
            }, {
                selector: ["enumMember"],
                format: ["PascalCase", "UPPER_CASE"],
            }, {
                selector: "enum",
                format: ["PascalCase", "UPPER_CASE"],
            }],
    },
}, {
    // Declare an override that applies to TypeScript files only
    files: [".storybook/**/*.{ts,tsx}"],

    languageOptions: {
        parser: tsParser,
        // Allow parsing of newer ECMAScript constructs used in TypeScript source code.  Although tsconfig.json
        // may allow only a small subset of ES2018 features, this liberal setting ensures that ESLint will correctly
        // parse whatever is encountered.
        ecmaVersion: "latest",
        sourceType: "module",

        // The "project" path is resolved relative to parserOptions.tsconfigRootDir.
        // Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
        parserOptions: {
            tsconfigRootDir: __dirname + "/.storybook",
            project: ["./tsconfig.json"],
        },
    },
}, {
    files: ["**/*.stories.tsx"],

    rules: {
        "react-hooks/rules-of-hooks": "off",
        "no-alert": "off",
        "unicorn/consistent-function-scoping": "off",
    },
}, {
    files: ["**/*.spec.{ts,tsx}"],

    extends: compat.extends(
        "@nordcloud/eslint-config-pat/mixins/vitest",
        "@nordcloud/eslint-config-pat/mixins/react-testing",
    ),

    rules: {
        "testing-library/no-node-access": "warn",
        "testing-library/no-container": "warn",
    },
    // .eslintignore 
}, {
    // Note: there should be no other properties in this object
    ignores: [
        "eslint.config.mjs",
        "**/.*",
        "build",
        "coverage",
        "dist",
        "node_modules",
        "storybook-static"
    ],
},]);