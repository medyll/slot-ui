export interface Sx4uProps extends Partial<CSSStyleDeclaration> {
    p?: number[];
    px?: number;
    py?: number;
    m?: number[];
    mx?: number;
    my?: number;
    w?: number;
    h?: number;
    debug?: boolean;
    radius?: number;
    brd?: number;
    brdb?: number;
    brdt?: number;
    brdr?: number;
    brdl?: number;
    brdx?: number;
    brdy?: number;
    alignCenter?: boolean;
    shad?: boolean;
    rot?: number;
    dsp?: CSSStyleDeclaration['display'];
    sm?: Sx4uProps;
    md?: Sx4uProps;
    lg?: Sx4uProps;
}
/**
 *
 * @param {HTMLElement} node
 * @param {Sx4uProps} sxArgs
 */
export declare function sx4u(node: HTMLElement, sxArgs: Sx4uProps): {
    'data-action': string;
} | undefined;
