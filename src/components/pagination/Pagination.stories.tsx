import { PaginationBox } from ".";

export default {
  title: "Components/Pagination",
  component: PaginationBox,
};

export const Default = {
  render: () => (
    <PaginationBox count={400} from={0} size={20} setPage={0} setSize={20} />
  ),
  name: "default",
};

export const Small = {
  render: () => (
    <PaginationBox
      small
      count={400}
      from={0}
      size={20}
      setPage={0}
      setSize={20}
    />
  ),
  name: "small",
};
