const clickAwayParams = {
    listenerSet: false
};
export function clickAway(node, props) {
    const { action, disabled } = props;
    // if (props?.disabled) return false
    // do not propagate if clicked element is node
    node.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    const doEvent = function (daNode) {
        if (!disabled) {
            if (action) {
                action();
                document.removeEventListener('click', doEvent);
            }
        }
    };
    // if (!clickAwayParams.listenerSet) {
    // treat outside click
    document.addEventListener('click', doEvent);
    clickAwayParams.listenerSet = true;
    console.log('listener set for ', node);
    //}
    return {
        destroy() {
            document.removeEventListener('click', doEvent);
        }
    };
}
