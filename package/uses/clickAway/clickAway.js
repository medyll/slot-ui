import { custom_event } from "svelte/internal";
const clickAwayParams = {
    listenerSet: false
};
export function clickAway(node, props) {
    const { action, disabled } = props;
    // treat outside click
    document.addEventListener('click', doEvent, true);
    function doEvent(event) {
        const bounds = node.getBoundingClientRect();
        let inner = (event.pageX > bounds.left && event.pageX < bounds.right) && (event.pageY > bounds.top && event.pageY < bounds.bottom);
        // console.log(inner)
        if (!disabled) {
            if (action && !inner) {
                action();
                const event = custom_event('clickAway', {}, { bubbles: true });
                node?.dispatchEvent(event);
                document.removeEventListener('click', doEvent, true);
            }
        }
    }
    ;
    return {
        destroy() {
            document.removeEventListener('click', doEvent, true);
        }
    };
}
