import { Meta, StoryObj } from "@storybook/react";
import { SVGIcon } from "../svgicon";
import { ExtendedPopover } from "./ExtendedPopover";

const meta: Meta = {
  title: "Components/ExtendedPopover",
  component: ExtendedPopover,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <p
      style={{
        color: "black",
        marginBottom: "2rem",
      }}
    >
      When{" "}
      <code
        style={{
          color: "red",
          fontFamily: "monospace",
        }}
      >
        trigger
      </code>{" "}
      prop is not provided, default Hamburger icon is rendered
    </p>
  ),

  name: "default",
};

export const Top: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Start
        </span>
        <ExtendedPopover
          placement="top"
          position="start"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Center
        </span>
        <ExtendedPopover
          placement="top"
          position="center"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          End
        </span>
        <ExtendedPopover
          placement="top"
          position="end"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
    </div>
  ),

  name: "top",
};

export const Bottom: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Start
        </span>
        <ExtendedPopover
          placement="bottom"
          position="start"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Center
        </span>
        <ExtendedPopover
          placement="bottom"
          position="center"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          End
        </span>
        <ExtendedPopover
          placement="bottom"
          position="end"
          trigger={<button type="button">Click Me!</button>}
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
    </div>
  ),

  name: "bottom",
};

export const Left: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Start
        </span>
        <ExtendedPopover
          placement="left"
          position="start"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Center
        </span>
        <ExtendedPopover
          placement="left"
          position="center"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          End
        </span>
        <ExtendedPopover
          placement="left"
          position="end"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
    </div>
  ),

  name: "left",
};

export const Right: StoryObj = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Start
        </span>
        <ExtendedPopover
          placement="right"
          position="start"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          Center
        </span>
        <ExtendedPopover
          placement="right"
          position="center"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "black",
            marginBottom: "2rem",
          }}
        >
          End
        </span>
        <ExtendedPopover
          placement="right"
          position="end"
          trigger={
            <button
              type="button"
              style={{
                height: "5rem",
              }}
            >
              Click Me!
            </button>
          }
          content={
            <ul
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                border: "solid 1px black",
              }}
            >
              <li>one</li>
              <li>two</li>
            </ul>
          }
        />
      </div>
    </div>
  ),

  name: "right",
};

export const Complex: StoryObj = {
  render: () => (
    <ExtendedPopover
      placement="top"
      position="center"
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "grey",
            padding: "0.5rem",
            border: "solid 1px black",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SVGIcon name="archive" />
          </div>
          <p
            style={{
              margin: "0.45rem 0",
              fontWeight: 700,
            }}
          >
            List inside
          </p>
          <ul
            style={{
              padding: "0.15rem 0.25rem",
            }}
          >
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>❤️</li>
          </ul>
        </div>
      }
    />
  ),

  name: "complex",
};

export const Keep: StoryObj = {
  render: () => (
    <p
      style={{
        color: "black",
        marginBottom: "2rem",
      }}
    >
      When{" "}
      <code
        style={{
          color: "red",
          fontFamily: "monospace",
        }}
      >
        clickOutsideToClose
      </code>{" "}
      prop is set to{" "}
      <code
        style={{
          color: "red",
          fontFamily: "monospace",
        }}
      >
        false
      </code>{" "}
      popover is not being closed when clicked outside.
    </p>
  ),

  name: "keep",
};

export const Hover: StoryObj = {
  render: () => (
    <p
      style={{
        color: "black",
        marginBottom: "2rem",
      }}
    >
      When{" "}
      <code
        style={{
          color: "red",
          fontFamily: "monospace",
        }}
      >
        triggerOn
      </code>{" "}
      prop is set to{" "}
      <code
        style={{
          color: "red",
          fontFamily: "monospace",
        }}
      >
        "hover"
      </code>{" "}
      popover is being triggered on hover action.
    </p>
  ),

  name: "hover",
};
