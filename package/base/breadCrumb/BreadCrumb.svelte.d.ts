import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLElement | null | undefined;
        breadList?: {
            action?: (() => void) | undefined;
            breads?: {
                text: string;
                icon: string;
                link?: string | undefined;
                data?: Record<string, any> | undefined;
            }[] | undefined;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BreadCrumbProps = typeof __propDef.props;
export declare type BreadCrumbEvents = typeof __propDef.events;
export declare type BreadCrumbSlots = typeof __propDef.slots;
export default class BreadCrumb extends SvelteComponentTyped<BreadCrumbProps, BreadCrumbEvents, BreadCrumbSlots> {
    get breadList(): {
        action?: (() => void) | undefined;
        breads?: {
            text: string;
            icon: string;
            link?: string | undefined;
            data?: Record<string, any> | undefined;
        }[] | undefined;
    }[];
}
export {};
