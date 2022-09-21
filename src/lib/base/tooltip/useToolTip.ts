import type { PopperPositionType } from "$lib/ui/popper/types.js"
import type { SvelteComponentDev } from "svelte/internal"


export type UsePopperProps = {
    code?: string
    component?: SvelteComponentDev | any
    componentProps?: {}
    content?: any
    parentNode?: HTMLElement | any
    position?: PopperPositionType
    disabled?: boolean
}

export const toolTip=(node: HTMLElement, props?: UsePopperProps)=> {
 
    if (!props) return false
    if (Boolean(props?.disabled)) return false 
    // node is parentNode !!!!
    const { parentNode = undefined, position = 'R', code = crypto.randomUUID() } = props;

    // document.addEventListener('click', (event) => event.stopPropagation())

    const doPopperEvent = function (event: any) {
        
        event.stopPropagation();
        event.preventDefault(); 
        
        console.log('over !!!! ')
        // openPopper(code, { ...props, parentNode: node });
    };

    const undoPopperEvent = function (event: any) {
        
        event.stopPropagation();
        event.preventDefault(); 
        
        // openPopper(code, { ...props, parentNode: node });
    };

    node.addEventListener('mouseover', doPopperEvent);
    node.addEventListener('mouseout', undoPopperEvent);

    return {
        destroy() {
            node.removeEventListener('mouseover', doPopperEvent);
            node.removeEventListener('mouseout', undoPopperEvent);
        },
        update(useDefault: any) {
            // fire event to parentNode
            // const event = custom_event('popper:closed', {}, { bubbles: true });
            // if (parentNode) parentNode.dispatchEvent(event);
        }
    };
}
