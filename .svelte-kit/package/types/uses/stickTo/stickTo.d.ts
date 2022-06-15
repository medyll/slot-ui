export declare type StickToPositionType = 'TL' | 'TR' | 'BR' | 'B' | 'BL';
export declare type NewStickToPositionType = 'TT' | 'RR' | 'BB' | 'LL' | 'CC';
declare type StickToProps = {
    parentNode: HTMLElement;
    position?: StickToPositionType;
    disabled?: boolean;
};
export declare function stickTo(node: HTMLElement, props: StickToProps): {
    destroy(): void;
} | undefined;
export {};
