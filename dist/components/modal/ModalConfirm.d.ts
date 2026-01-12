import * as React from "react";
import { StyledModal } from "./styles";
type ModalProps = React.ComponentPropsWithoutRef<typeof StyledModal> & {
    isOpen: boolean;
    onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void;
    confirm?: (event: React.KeyboardEvent | React.MouseEvent) => void;
    contentLabel: string;
    actionLabel: string;
    children: React.ReactNode;
    customStyles?: {
        [key: string]: string;
    };
    alignText?: "center" | "left" | "right";
};
export declare function ModalConfirm({ children, contentLabel, actionLabel, alignText, onClose, confirm, ...props }: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
