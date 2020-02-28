import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Cell } from "../../src/components/grid";

const stories = storiesOf("Components/Grid", module);
stories.add("simple grid", () => {
  return (
    <Grid>
      <Cell>Cell 1</Cell>
      <Cell>Cell 2</Cell>
      <Cell>Cell 3</Cell>
      <Cell>Cell 4</Cell>
      <Cell>Cell 5</Cell>
      <Cell>Cell 6</Cell>
      <Cell>Cell 7</Cell>
      <Cell>Cell 8</Cell>
      <Cell>Cell 9</Cell>
      <Cell>Cell 10</Cell>
      <Cell>Cell 11</Cell>
      <Cell>Cell 12</Cell>
      <Cell>Cell 1</Cell>
      <Cell>Cell 2</Cell>
      <Cell>Cell 3</Cell>
      <Cell>Cell 4</Cell>
      <Cell>Cell 5</Cell>
      <Cell>Cell 6</Cell>
      <Cell>Cell 7</Cell>
      <Cell>Cell 8</Cell>
      <Cell>Cell 9</Cell>
      <Cell>Cell 10</Cell>
      <Cell>Cell 11</Cell>
      <Cell>Cell 12</Cell>
    </Grid>
  );
});
