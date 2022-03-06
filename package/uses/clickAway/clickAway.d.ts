declare type ClickAwayProps = {
    parent?: HTMLElement | string;
    action?: () => void;
    disabled?: boolean;
};
export declare function clickAway(node: HTMLElement, props: ClickAwayProps): {
    destroy(): void;
};
export {};
