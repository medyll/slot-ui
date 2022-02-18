declare type StickToProps = {
    parentNode: HTMLElement;
    position?: 'TL' | 'TR' | 'BR' | 'B' | 'BL';
    disabled?: boolean;
};
export declare function stickTo(node: HTMLElement, props: StickToProps): {
    destroy(): void;
};
export {};
