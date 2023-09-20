import {
  Select,
  customMultiColorStyles,
  SelectColoredOption,
  SelectInstance,
} from ".";
import theme from "../../theme";

export default {
  title: "Forms/Select",
  component: Select,
};

export const Basic = {
  render: () => {
    const options = [
      {
        value: "chocolate",
        label: "Chocolate",
      },
      {
        value: "strawberry",
        label: "Strawberry",
      },
      {
        value: "vanilla",
        label: "Vanilla",
      },
    ];

    return (
      <div
        style={{
          height: "150px",
        }}
      >
        <Select options={options}></Select>
      </div>
    );
  },

  name: "basic",
};

export const Multiselect = {
  render: () => {
    const options = [
      {
        value: "chocolate",
        label: "Chocolate",
      },
      {
        value: "strawberry",
        label: "Strawberry",
      },
      {
        value: "vanilla",
        label: "Vanilla",
      },
    ];

    return (
      <div
        style={{
          height: "150px",
        }}
      >
        <Select
          isMulti
          defaultValue={[options[1], options[2]]}
          options={options}
        ></Select>
      </div>
    );
  },

  name: "multiselect",
};

export const MultiselectColors = {
  render: () => {
    const colorOptions = [
      {
        value: "ocean",
        label: "Ocean",
        color: "#00B8D9",
        isFixed: true,
      },
      {
        value: "blue",
        label: "Blue",
        color: "#0052CC",
        isDisabled: true,
      },
      {
        value: "purple",
        label: "Purple",
        color: "#5243AA",
      },
      {
        value: "red",
        label: "Red",
        color: "#FF5630",
        isFixed: true,
      },
      {
        value: "orange",
        label: "Orange",
        color: "#FF8B00",
      },
      {
        value: "yellow",
        label: "Yellow",
        color: "#FFC400",
      },
      {
        value: "green",
        label: "Green",
        color: "#36B37E",
      },
      {
        value: "forest",
        label: "Forest",
        color: "#00875A",
      },
      {
        value: "slate",
        label: "Slate",
        color: "#253858",
      },
      {
        value: "silver",
        label: "Silver",
        color: "#666666",
      },
    ];

    return (
      <div
        style={{
          height: "150px",
        }}
      >
        <Select
          isMulti
          defaultValue={[colorOptions[1], colorOptions[2]]}
          options={colorOptions}
          styles={customMultiColorStyles}
        ></Select>
      </div>
    );
  },

  name: "multiselect-colors",
};

export const Ref = {
  render: () => {
    const options = [
      {
        value: "chocolate",
        label: "Chocolate",
      },
      {
        value: "strawberry",
        label: "Strawberry",
      },
      {
        value: "vanilla",
        label: "Vanilla",
      },
    ];

    const selectRef = React.useRef(null);

    return (
      <div
        style={{
          height: "150px",
        }}
      >
        <Select
          isMulti
          defaultValue={[options[1], options[2]]}
          options={options}
          ref={selectRef}
        ></Select>
        <button onClick={() => selectRef.current.focus()}>Focus</button>
      </div>
    );
  },

  name: "ref",
};
