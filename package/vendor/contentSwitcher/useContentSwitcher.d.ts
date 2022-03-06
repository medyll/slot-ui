export declare type UseContentSwitcherProps = {
    parent: HTMLElement | string;
    disabled?: boolean;
};
export declare const useContentSwitcher: (node: HTMLElement, props: UseContentSwitcherProps) => {
    destroy: () => void;
};
