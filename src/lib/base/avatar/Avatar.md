```ts 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** icon name 	*/ icon?: string | undefined;
        /**
             * size of the avatar
             * @type {'tiny' | 'small' | 'medium' | 'large' | 'full'}
             */ size?: "tiny" | "small" | "medium" | "large" | "full" | undefined;
        /**
             * size of the icon
             * @type {'tiny' | 'small' | 'medium' | 'large' | 'full'}
             */ iconSize?: "tiny" | "small" | "medium" | "default" | "large" | "big" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        avatarBadge: {};
        default: {};
    };
};

 ```