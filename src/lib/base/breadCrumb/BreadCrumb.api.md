```import { SvelteComponent } from "svelte";
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
export type BreadCrumbProps = typeof __propDef.props;
export type BreadCrumbEvents = typeof __propDef.events;
export type BreadCrumbSlots = typeof __propDef.slots;
export default class BreadCrumb extends SvelteComponent<BreadCrumbProps, BreadCrumbEvents, BreadCrumbSlots> {
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

 ```