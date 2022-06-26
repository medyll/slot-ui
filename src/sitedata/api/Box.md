```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        isOpen?: boolean | undefined;
        hasMenu?: boolean | undefined;
        title?: string | undefined;
        icon?: string | undefined;
        content?: string | undefined;
        buttonZone?: string | undefined;
        actions?: any;
        onClose: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        titleSlot: {
            slot: string;
        };
        iconSlot: {
            slot: string;
        };
        contentSlot: {};
        default: {};
        buttonZoneSlot: {};
    };
};

 ```