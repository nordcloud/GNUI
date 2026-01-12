export declare function useDisclosure(isOpenDefault?: boolean): {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: (toSet?: boolean) => void;
};
