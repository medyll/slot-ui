```import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** is the content visible */ isOpen?: boolean | undefined;
        /** used to activate the slotui.TitleBar component */ hasMenu?: boolean | undefined;
        /** text to be shown in the title bar */ title?: string | undefined;
        /** alternative to iconSlot, icon to be used with the internat iconify component */ icon?: string | undefined;
        iconFamily?: string | undefined;
        /** alternative to contentSlot,  content to be shown in the main area */ content?: string | undefined;
        /** alternative to buttonZoneSlot, content to be shown in the bottom button zone */ buttonZone?: string | undefined;
        /** component actions */ actions?: any;
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
export declare type BoxProps = typeof __propDef.props;
export declare type BoxEvents = typeof __propDef.events;
export declare type BoxSlots = typeof __propDef.slots;
export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {
    get actions(): any;
}
export {};

 ```