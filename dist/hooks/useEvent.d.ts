type Listener = {
    addEventListener: (name: string, handler: (event?: Event) => void) => void;
    removeEventListener: (name: string, handler: (event?: Event) => void) => void;
};
type AddEventListener<T> = T extends Listener ? T["addEventListener"] : never;
type UseEventProps<T> = {
    name: Parameters<AddEventListener<T>>[0];
    handler?: Parameters<AddEventListener<T>>[1] | null;
    target?: T | Window | null;
};
export declare function useEvent<T extends Listener>({ name, handler, target, }: UseEventProps<T>): void;
export {};
