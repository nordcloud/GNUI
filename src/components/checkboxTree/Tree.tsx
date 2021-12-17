import * as React from "react";
import { Comp } from "./types";
import { getChildrenUids, getParentsUids } from "./utils";

export function CheckboxTreeTest() {
  const composition = [
    {
      uid: "meat",
      label: "Meat",
      children: [
        {
          uid: "meat->pork",
          label: "Pork",
          children: [
            {
              uid: "meat->pork->ham",
              label: "Ham",
            },
            {
              uid: "meat->pork->bacon",
              label: "Bacon",
              children: [
                {
                  uid: "meat->pork->bacon->15%",
                  label: "15%",
                },
              ],
            },
          ],
        },
        {
          uid: "meat->chicken",
          label: "Chicken",
          children: [
            {
              uid: "meat->chicken->breast",
              label: "Breast",
            },
          ],
        },
        {
          uid: "meat->turkey",
          label: "Turkey",
          children: [
            {
              uid: "meat->turkey->breast",
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

  const RenderComposition = ({ uid, label, children }: Comp): JSX.Element => {
    const handleSelect = (treeItem: Comp) => {
      if (!selected.includes(treeItem.uid)) {
        const uids = [treeItem.uid, ...getChildrenUids(treeItem)];
        setSelected([...selected, ...uids]);
      } else {
        const uids = [
          treeItem.uid,
          ...getChildrenUids(treeItem),
          ...getParentsUids(treeItem),
        ];
        setSelected(selected.filter((id) => !uids.includes(id)));
      }
    };

    React.useEffect(() => {
      if (
        children?.every((child) => selected.includes(child.uid)) &&
        !selected.includes(uid)
      ) {
        setSelected([...selected, uid]);
      }
    }, []);

    return (
      <div style={{ marginLeft: "2rem" }}>
        <div css={{ display: "flex" }}>
          <input
            onChange={() => handleSelect({ uid, label, children })}
            checked={selected.includes(uid)}
            type="checkbox"
            id={uid}
          />
          <span>{label}</span>
        </div>
        {children &&
          children.map((child) => (
            <RenderComposition key={child.uid} {...child} />
          ))}
      </div>
    );
  };

  return (
    <div>
      {composition.map((comp) => (
        <RenderComposition key={comp.uid} {...comp} />
      ))}
    </div>
  );
}
