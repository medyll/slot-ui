import { elem } from '../../engine/elem';
export function stickTo(node, props) {
    const { parentNode, position } = props;
    if (node && parentNode) {
        const parentPos = parentNode.getBoundingClientRect();
        if (!document.getElementById('svelte'))
            return;
        document.getElementById('svelte').appendChild(node);
        setPosition(node, position, parentNode);
    }
    else {
        //  node.style.bottom = String(0)
        //  node.style.right = String(0)
    }
    node.addEventListener('click', (event) => event.preventDefault());
    function checkPos(node) {
        const nodePos = parentNode.getBoundingClientRect();
        if (nodePos.left < 0)
            node.style.left = '0px';
        if (nodePos.top < 0)
            node.style.top = '0px';
        if (nodePos.top > document.body.offsetHeight)
            node.style.top = `${document.body.offsetHeight - nodePos.height}px`;
        if (nodePos.right > document.body.offsetWidth)
            node.style.left = `${document.body.offsetWidth - nodePos.width}px`;
    }
    function setPosition(node, position, parentNode) {
        const style = {};
        const parentPos = parentNode.getBoundingClientRect();
        switch (position) {
            case 'B':
                node.style.bottom = '';
                node.style.right = '';
                node.style.top = String(parentPos.bottom) + 'px';
                node.style.left = String(parentPos.right - (node.offsetWidth - parentNode.offsetWidth)) + 'px';
                break;
            case 'BL':
                node.style.bottom = '';
                node.style.right = '';
                node.style.top = String(parentPos.bottom) + 'px';
                node.style.left = String(parentPos.left) + 'px';
                break;
            case 'BR':
                node.style.bottom = '';
                node.style.right = '';
                node.style.top = String(parentPos.bottom) + 'px';
                // node.style.left = String(parentPos.right) + 'px';
                node.style.left = String(parentPos.left - (node.offsetWidth - parentNode.offsetWidth)) + 'px';
                break;
            case 'T':
                node.style.bottom = '';
                node.style.right = '';
                node.style.top = String(parentPos.bottom - (node.offsetHeight)) + 'px';
                node.style.left = String(parentPos.right - (node.offsetWidth - parentNode.offsetWidth)) + 'px';
                break;
            case 'TL':
                node.style.bottom = '';
                node.style.right = '';
                node.style.top = String(parentPos.top - node.offsetHeight) + 'px';
                node.style.left = String(parentPos.left) + 'px';
                break;
            default:
            case 'TR':
                node.style.right = '';
                node.style.bottom = '';
                node.style.top = String(parentPos.top - node.offsetHeight) + 'px';
                node.style.left = String(parentPos.left - (node.offsetWidth - parentNode.offsetWidth)) + 'px';
                break;
        }
        checkPos(node);
        return style;
    }
    return {
        destroy() {
            //  document.removeEventListener('click', doEvent);
        }
    };
}
