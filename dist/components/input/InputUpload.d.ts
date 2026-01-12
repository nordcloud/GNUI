import * as React from "react";
import { StyledInputProps } from "./types";
type UploadProps = Omit<StyledInputProps, "type">;
export declare const Upload: (props: UploadProps & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
