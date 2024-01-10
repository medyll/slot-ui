```import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        style?: string | undefined;
        status: "loading" | "success" | "error" | "empty" | undefined;
        showSuccess?: boolean | undefined;
        /** @deprecated */ isLoading?: boolean | undefined;
        /** @deprecated */ isError?: boolean | undefined;
        /** @deprecated */ isEmpty?: boolean | undefined;
        /** icon sources */ loadingIcon?: string | undefined;
        errorIcon?: string | undefined;
        emptyIcon?: string | undefined;
        successIcon?: string | undefined;
        /** message to display */ message?: string | undefined;
        /** used if props.message   is omitted */ messages?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loaderLoading: {};
        loaderError: {};
        loaderSuccess: {};
        loaderEmpty: {};
        loaderMessage: {};
    };
};
export type LoaderProps = typeof __propDef.props;
export type LoaderEvents = typeof __propDef.events;
export type LoaderSlots = typeof __propDef.slots;
export default class Loader extends SvelteComponent<LoaderProps, LoaderEvents, LoaderSlots> {
}
export {};

 ```