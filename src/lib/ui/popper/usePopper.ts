import { custom_event, type SvelteComponent, type SvelteComponentDev, } from "svelte/internal"
import { openPopper } from "./actions"
import type { PopperPositionType } from "./types"

export type UsePopperProps = {
    code?: string
    component?: SvelteComponentDev | any
    componentProps?: {}
    content?: any
    parentNode?: HTMLElement | any
    position?: PopperPositionType
    disabled?: boolean
}

export function popper(node: HTMLElement, props: UsePopperProps) {

    if (props?.disabled) return false

    const { parentNode, position = 'R', code = crypto.randomUUID() } = props;

    // document.addEventListener('click', (event) => event.stopPropagation())

    const doPopperEvent = function (event: any) {
        event.preventDefault();
        event.stopPropagation();
 
        openPopper(code, { ...props });
    };

    node.addEventListener('click', doPopperEvent);

    return {
        destroy() {
            node.removeEventListener('click', doPopperEvent);
        },
        update(useDefault: any) {
            // fire event to parentNode
            const event = custom_event('popper:closed', {}, { bubbles: true });
            if (parentNode) parentNode.dispatchEvent(event);
        }
    };
}
