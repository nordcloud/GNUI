<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# General Nordcloud UI

This repo contains the Nordcloud Design System - a collection of reusable React components used in Nordcloud's SaaS products.

## Components

1. Design System (`/src/components`)
2. Storybook (`/src/stories`)

## Install

```bash
npm install @nordcloud/gnui
```

or

```bash
yarn add @nordcloud/gnui
```

Make sure you have a proper versions of required packages installed, they are specified in `peerDependencies` field inside `package.json`.

Version 7 or greater of `npm` should install them automatically, if not, run:

```bash
npm install react react-dom styled-components
```

Don't forget to install types if you are using TypeScript:

```bash
npm install -D @types/react @types/react-dom @types/styled-components
```

## Usage

Apply global GNUI styles at the top level of your app:

```tsx
import { SetGlobalStyle } from "@nordcloud/gnui";

ReactDOM.render(
  <React.StrictMode>
    <SetGlobalStyle customScrollbars />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Switch themes:

```tsx
import {
  Button,
  SVGIcon,
  useThemeSwitcher,
  THEME_OPTIONS,
} from "@nordcloud/gnui";

function UserSettings() {
  const { currentTheme, setTheme } = useThemeSwitcher();

  return (
    <Button onClick={() => setTheme(nextTheme)}>
      <IconWrap>
        <SVGIcon name="dashboard" />
      </IconWrap>
      Switch to {THEME_OPTIONS[nextTheme].toLowerCase()} theme
    </Button>
  );
}
```

## Storybook deployment

Storybook allows you to preview components. It deploys the code automatically with Amplify Console triggered by changes on branch `master`. Pipeline steps are found in `amplify.yml`.

When you create a PR against the `master` branch, Amplify creates a new deployment automatically - the environment will be attached to the PR at Github. Reviewers can preview changes using this deployment - after the PR gets merged or rejected, the environment is destroyed automatically by Amplify Console.

## Contributing to this repo

- Please create your components in `src/components` and update stories in `stores`.
- Code should be formatted using [Prettier](https://prettier.io/).
- We are using styled-components for styling.
- All code should be written using TS.
- Every component props should be described using "type" instead of "interface".
- Name types with Pascal Case naming convention and Props or Data prefix.

## Local setup

### 1. Clone the repo

### 2. Setup Node

Below versions of Node & npm are required:

```bash
  "node": ">=16.13.0",
  "npm": ">=8.0.0"
```

### 3. Install packages

```bash
npm install
```

### 4. Run Storybook to verify everything works

```bash
npm run storybook
```

## Development

- Make sure to check out [Storybook Design System](https://github.com/storybookjs/design-system)

## Local testing

There is a possibility to build & test the package locally in the project it's currently used in.

```bash
npm run build
npm pack
```

You will get a tarball with the freshly built package, you can copy it inside your project's folder and install with

```bash
npm install nordcloud-gnui-${VERSION}.tgz
```

After the successful installation it's ready to be tested (remember to restart the dev server)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/raczyk"><img src="https://avatars0.githubusercontent.com/u/4233480?v=4" width="100px;" alt=""/><br /><sub><b>raczyk</b></sub></a></td>
    <td align="center"><a href="https://github.com/nowyDEV"><img src="https://avatars2.githubusercontent.com/u/12304307?v=4" width="100px;" alt=""/><br /><sub><b>Dominik N</b></sub></a></td>
    <td align="center"><a href="https://github.com/janosio-nordcloud"><img src="https://avatars2.githubusercontent.com/u/58164749?v=4" width="100px;" alt=""/><br /><sub><b>Jan Osio</b></sub></a></td>
    <td align="center"><a href="https://github.com/Horay"><img src="https://avatars3.githubusercontent.com/u/8356411?v=4" width="100px;" alt=""/><br /><sub><b>Horay</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## License

Licensed under the MIT License, Copyright © 2020 Nordcloud Engineering

See [LICENSE](./LICENSE) for more information.
