import * as React from "react";
import { StyledModal } from "./styles";
import { ModalBoxProps, ModalContentProps, ModalProps } from "./types";
type Props = ModalBoxProps & ModalContentProps & ModalProps & React.ComponentPropsWithoutRef<typeof StyledModal>;
export declare function Modal({ children, contentLabel, actions, modalMinWidth, contentMaxHeight, alignText, onClose, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
