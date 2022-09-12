```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** type of levels */ level?: ("error" | "success" | "info" | "warning" | "alert" | "discrete") | undefined;
        action?: (() => void) | undefined;
        data?: {} | undefined;
        text?: string | undefined;
        message?: string | undefined;
        isDragable?: boolean | undefined;
        isOpen?: boolean | undefined;
        actions?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        topButtonSlot: {};
        messageSlot: {};
        buttonZoneSlot: {};
    };
};

 ```