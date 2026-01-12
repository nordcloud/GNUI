import * as React from "react";
import { Status } from "../input/types";
export type TextareaGroupProps = {
    status?: Status;
    maxCharCount?: number;
};
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    small?: boolean;
    ref?: React.Ref<HTMLTextAreaElement>;
};
export declare const Textarea: (props: TextareaGroupProps & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    small?: boolean | undefined;
    ref?: React.Ref<HTMLTextAreaElement> | undefined;
} & React.RefAttributes<HTMLTextAreaElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
