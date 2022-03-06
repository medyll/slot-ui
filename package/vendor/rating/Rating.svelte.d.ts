import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        ratingBase?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RatingProps = typeof __propDef.props;
export declare type RatingEvents = typeof __propDef.events;
export declare type RatingSlots = typeof __propDef.slots;
export default class Rating extends SvelteComponentTyped<RatingProps, RatingEvents, RatingSlots> {
}
export {};
