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

Copy & paste types from component file and wrap it with three backticks followed by `typescript`.

#### Example:

```typescript
interface BoxProps {
  color: string;
  width?: number;
  margin?: Array<string | number>;
}
```

### Describe props

Describe all props in verbose way with examples if needed.

```markdown
### prop

> `prop: type` — <Provide some description if needed>

<Preview>
  <Story name='default'>
    <COMPONENT_NAME prop='PROP_NAME' />
  </Story>
</Preview>
```

#### Example:

```markdown
### color

> `color?: string` — color takes value from `theme` if exists or use provided value as is.

<Preview>
  <Story name='color'>
    <Box color='danger'>
      This text will get color from theme.
    </Box>
    <Box color='crimson'>
      As crimson doesn't exist in theme text will be #DC143C.
    </Box>
  </Story>
</Preview>
```
