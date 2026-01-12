import * as React from "react";
import { SpaceProps } from "styled-system";
declare const StyledTable: import("styled-components").StyledComponent<"table", any, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    hoverline?: boolean | undefined;
    striped?: boolean | undefined;
    small?: boolean | undefined;
    tiny?: boolean | undefined;
}, never>;
declare function Table(props: React.ComponentProps<typeof StyledTable>): import("react/jsx-runtime").JSX.Element;
declare namespace Table {
    var thead: import("styled-components").StyledComponent<"thead", any, {}, never>;
    var tbody: import("styled-components").StyledComponent<"tbody", any, {}, never>;
    var tfoot: import("styled-components").StyledComponent<"tfoot", any, {}, never>;
    var td: import("styled-components").StyledComponent<"td", any, {
        hasLeftBorder?: boolean | undefined;
        hasRightBorder?: boolean | undefined;
    }, never>;
    var tr: import("styled-components").StyledComponent<"tr", any, {}, never>;
    var th: import("styled-components").StyledComponent<"th", any, {
        width?: string | undefined;
    }, never>;
}
export default Table;
