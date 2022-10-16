```import { SvelteComponentTyped } from "svelte";
import { fade } from 'svelte/transition';
declare const __propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        actions?: {
            toggle: (lo?: boolean) => void;
            toggleLoading: (lo?: boolean) => void;
        } | undefined;
        showLogin?: boolean | undefined;
        transition?: {
            type: typeof fade;
            args: {};
        } | undefined;
        fields?: {
            email: string;
            password: string;
        } | undefined;
        loading?: boolean | undefined;
        submitting?: boolean | undefined;
        onSubmit?: ((args: any) => Promise<unknown>) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        loginAvatarRoot: {};
        loginAvatar: {};
        loginForm: {};
        slotRetrievePassword: {};
        default: {};
    };
};
export declare type LoginProps = typeof __propDef.props;
export declare type LoginEvents = typeof __propDef.events;
export declare type LoginSlots = typeof __propDef.slots;
export default class Login extends SvelteComponentTyped<LoginProps, LoginEvents, LoginSlots> {
    get actions(): {
        toggle: (lo?: boolean | undefined) => void;
        toggleLoading: (lo?: boolean | undefined) => void;
    };
}
export {};

 ```