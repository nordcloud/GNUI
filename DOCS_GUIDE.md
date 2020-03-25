# How to write GNUI docs

I decide to wrote this short guide, because I'd love if we will write consistent and good documentation for every GNUI's component. ✨ Perhaps there's no need for that kind of materials, but who knows, maybe sometimes it will help. Hope you'd like it! ♥️

### Add JavaScript imports

```javascript
import { Meta, Story, Preview } from "@storybook/addon-docs/blocks";
import { COMPONENT_NAME } from "../components/COMPONENT_NAME";
```

### Default component

Add main header as COMPONENT_NAME and then write shortest and easiest variant of component or just default one like `<Input name='inputs name' />`

```markdown
# COMPONENT_NAME

<Preview>
  <Story name="DEFAULT_COMPONENT>
    <COMPONENT_NAME />
  </Story>
</Preview>
```

### Props

Describe all components props according to template below. You don't have to write nothing more — we'll have place for it 🕺🏼

> Feel free to provide links to proper props using markdown syntax.

```markdown
## Props

- [`PROP_NAME`: `TYPE`](#PROP_NAME) — _optional_ | **required**
```

Examples of using syntax from above is:

```
— [`disabled`: `boolean`](#disabled) - _optional_
- [`size`: `string`](#size) - **required**
```

### Describe props

Describe all props in verbose way with examples if needed.

```markdown
### prop

> [`PROP_NAME`: `TYPE`](#PROP_NAME) — _optional_ | **required** — <Place for whatever User needs to know about it>

<Preview>
  <Story name='default'>
    <COMPONENT_NAME prop='PROP_NAME />
  </Story>
</Preview>
```

TBC
