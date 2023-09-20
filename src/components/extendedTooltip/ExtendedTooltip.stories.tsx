import { ExtendedTooltip } from "./ExtendedTooltip";
import { SVGIcon } from "../svgicon";

export default {
  title: "Components/ExtendedTooltip",
  component: ExtendedTooltip,
};

export const Top = {
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="start"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="center"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="end"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
      </div>
    </div>
  ),

  name: "top",
};

export const Bottom = {
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="start"
          placement="bottom"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="center"
          placement="bottom"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="end"
          placement="bottom"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
      </div>
    </div>
  ),

  name: "bottom",
};

export const Left = {
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="start"
          placement="left"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="center"
          placement="left"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="end"
          placement="left"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
      </div>
    </div>
  ),

  name: "left",
};

export const Right = {
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="start"
          placement="right"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="center"
          placement="right"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
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
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          position="end"
          placement="right"
        >
          <button
            style={{
              height: "5rem",
            }}
            type="button"
          >
            Hover Me!
          </button>
        </ExtendedTooltip>
      </div>
    </div>
  ),

  name: "right",
};

export const Status = {
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
            color: "red",
            marginBottom: "2rem",
          }}
        >
          Danger
        </span>
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          status="danger"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
            color: "orange",
            marginBottom: "2rem",
          }}
        >
          Warning
        </span>
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          status="warning"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
            color: "green",
            marginBottom: "2rem",
          }}
        >
          Success
        </span>
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          status="success"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
            color: "blue",
            marginBottom: "2rem",
          }}
        >
          Notification
        </span>
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          status="notification"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
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
            color: "purple",
            marginBottom: "2rem",
          }}
        >
          Accent
        </span>
        <ExtendedTooltip
          caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin."
          status="accent"
        >
          <button type="button">Hover Me!</button>
        </ExtendedTooltip>
      </div>
    </div>
  ),

  name: "status",
};

export const OtherComponents = {
  render: () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <ExtendedTooltip caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin.">
        <button type="button">Hover Me!</button>
      </ExtendedTooltip>
      <ExtendedTooltip caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin.">
        <SVGIcon name="help" color="primary" />
      </ExtendedTooltip>
      <ExtendedTooltip caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin.">
        <input name="Name" placeholder="Name" />
      </ExtendedTooltip>
    </div>
  ),

  name: "otherComponents",
};
