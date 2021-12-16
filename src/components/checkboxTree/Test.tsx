import * as React from "react";
import { Comp } from "./types";
import { getChildrenUids, isAllChildrenSelected } from "./utils";

export function CheckboxTreeTest() {
  const composition = [
    {
      uid: "id-meat",
      label: "Meat",
      children: [
        {
          uid: "id-pork",
          label: "Pork",
          children: [
            {
              uid: "id-ham",
              label: "Ham",
            },
            {
              uid: "id-bacon",
              label: "Bacon",
            },
          ],
        },
        {
          uid: "id-chicken",
          label: "Chicken",
          children: [
            {
              uid: "id-chicken-breast",
              label: "Breast",
            },
          ],
        },
        {
          uid: "id-turkey",
          label: "Turkey",
          children: [
            {
              uid: "id-turkey-breast",
              label: "Breast",
            },
          ],
        },
      ],
    },
  ];

  const [selected, setSelected] = React.useState<string[]>([]);
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [indeterminate, setIndeterminate] = React.useState<string[]>([]);

  const handleSelect = (comp: Comp, parent?: Comp) => {
    if (comp.children) {
      const uidsForSelection = [comp.uid, ...getChildrenUids(comp)];
      if (selected.includes(comp.uid)) {
        setSelected(selected.filter((id) => !uidsForSelection.includes(id)));
      } else {
        setSelected([...selected, ...uidsForSelection]);
      }
    } else {
      if (parent) {
        if (selected.includes(comp.uid)) {
          setSelected(
            selected.filter((id) => id !== comp.uid && id !== parent.uid)
          );
        } else {
          setSelected([...selected, comp.uid]);
        }
      }
    }
  };

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  const RenderComposition = ({
    uid,
    label,
    children,
    parent,
  }: Comp): JSX.Element => {
    return (
      <div style={{ marginLeft: "2rem" }}>
        <div css={{ display: "flex" }}>
          <input
            checked={selected.includes(uid)}
            onChange={() => handleSelect({ uid, label, children }, parent)}
            type="checkbox"
            id={uid}
          />
          <span>{label}</span>
        </div>
        {children &&
          children.map((child) => (
            <>
              <RenderComposition
                key={child.uid}
                {...child}
                parent={{ uid, label, children }}
              />
            </>
          ))}
      </div>
    );
  };

  /*  React.useEffect(() => {
    console.log(selected);
  }, [selected]); */

  return (
    <div>
      {composition.map((comp) => (
        <RenderComposition key={comp.uid} {...comp} />
      ))}
    </div>
  );
}
