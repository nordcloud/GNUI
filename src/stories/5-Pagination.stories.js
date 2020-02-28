import { storiesOf } from "@storybook/react";
import * as React from "react";
import { PaginationBox } from "../components/pagination";

const stories = storiesOf("Components/Pagination", module);

stories.add("default", () => (
  <PaginationBox count={50 || 0} from={0} size={20} setPage={0} setSize={20} />
));
