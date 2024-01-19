```ts 
__propDef: {
    props: {
        /**
             *  className off the root component
             */ class?: string | undefined;
        /**
             *  element root HTMLDivElement props
             */ element?: HTMLDivElement | null | undefined;
        /** type of levels
                @type {'success' | 'info' | 'error' | 'warning' | 'alert' | 'discrete'}
            */ level?: ("alert" | "error" | "success" | "info" | "warning" | "discrete") | undefined;
        /** message to be shown */ message?: string | undefined;
        /** make the alert draggable */ isDraggable?: boolean | undefined;
        /** show or hide the alert */ isOpen?: boolean | undefined;
        /** component actions
             * @type {Record<'open'|'toggle' | 'close', Function>}
             */ actions?: Record<"close" | "toggle" | "open", Function> | undefined;
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