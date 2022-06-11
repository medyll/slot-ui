export declare type IChromeOptionsArgs<T = Record<string, any>> = {
    onClose?: (chromeFrame?: IChromeArgs) => {};
    onCancel?: (chromeFrame?: IChromeArgs) => {};
    onValidate?: (chromeFrame?: IChromeArgs) => {};
    showCommandBar?: boolean;
    parent?: string;
};
export interface IChromeArgs<T = Record<string, any>> extends IChromeOptionsArgs {
    frameId: string | number;
    title?: string;
    open?: boolean;
    minimized?: boolean;
    maximized?: boolean;
    noFrameListButton?: boolean;
    active?: boolean;
    secondaryTitle?: string;
    description?: string;
    path?: string;
    component?: any;
    componentProps?: any;
    parent?: string;
    zIndex?: number;
    data?: T;
    position?: {
        x: number;
        y: number;
    };
    defaultPosition?: {
        x: number;
        y: number;
    };
}
