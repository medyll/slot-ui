declare const elem: (node: HTMLElement) => {
    find: (qy: string) => Element | null;
    findAll: (qy: string) => NodeListOf<Element>;
    up: (qy?: string | undefined, index?: number | undefined) => any;
    next: (qy?: string | undefined, index?: number | undefined) => any;
    previous: (qy?: string | undefined, index?: number | undefined) => any;
    setStyle: (element: HTMLElement, styles: Record<string, any>) => HTMLElement;
};
export { elem };
