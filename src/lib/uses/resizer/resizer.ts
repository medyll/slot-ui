import { custom_event, tick } from "svelte/internal"

interface ResizerProps {
    direction?: 'horizontal' | 'vertical' | 'multiple'
}

export const resizer = (node: HTMLElement, props: ResizerProps = {}) => {

    let handle: HTMLElement;
    let width = node.offsetWidth
    let x = 0

    const { direction = 'horizontal' } = props

    let expanding: boolean | null = null
    let start: number | null = null, initial: { x: number, width: number } | null = null


    const eventStart = custom_event('resizer:start', {}, { bubbles: true });
    const eventEnd = custom_event('resizer:end', {}, { bubbles: true });



    if (node.parentNode) {
        node.parentNode.addEventListener('mousemove', expand);
        node.parentNode.addEventListener('mouseup', stopExpand);
    }

    if (!node.querySelector('data-resizer')) {
        handle = document.createElement('div')
        handle.setAttribute('data-resizer', 'true')
        handle.setAttribute('style', 'border-radius:6px;position:absolute;height:100%;right:0;cursor:col-resize;width:8px;background-color:transparent;z-index:10')
        handle.innerHTML = ''
        node.appendChild(handle)
    } else {
        handle = node.querySelector('data-resizer') ?? node
    }


    if (handle) handle.addEventListener('mousedown', startExpand); 


    async function expand(event: any) {
        if (!expanding) return


        if (direction == 'horizontal') {
            if (start) {
                const delta = event.pageX - start
                width = initial.width + delta

                if (width) {
                    await tick();
                    node.style.width = width + 'px'
                }

                const eventResize = custom_event('resizer:resize', { width }, { bubbles: true });
                node.dispatchEvent(eventResize);

            }
        }
    }

    function startExpand(event: any) {
        // event.stopPropagation();
        // event.preventDefault();
        if (!expanding) {
            expanding = true
            start = event.pageX
            initial = { x, width }
            node.dispatchEvent(eventStart);
        }
    }

    function stopExpand() {
        expanding = null
        start = null
        initial = null
        node.dispatchEvent(eventEnd);
    }

    return {
        destroy() {
            if(handle) handle.removeEventListener('mousedown', startExpand);
            if (node.parentNode) {
                node.parentNode.removeEventListener('mousemove', expand);
                node.parentNode.removeEventListener('mouseup', stopExpand);
            }
        }
    };

}
