import { includes, replace } from 'lodash';
import { elem } from '../../engine/elem.js';
export function stickTo(node, props) {
    const { parentNode, position, stickToHookWidth } = props;
    let intervaller;
    if (node && parentNode) {
        document.body.appendChild(node);
        setPosition(node, position, parentNode);
    }
    else {
        return false;
    }
    function checkPos(node, parentNode, position) {
        const nodePos = node.getBoundingClientRect();
        const parentPos = parentNode.getBoundingClientRect();
        let newPos = position;
        if (parentPos.top + nodePos.height > document.body.offsetHeight) {
            newPos = position.replace('B', 'T');
        }
        else if (parentPos.top + nodePos.height < document.body.offsetHeight) {
            newPos = position.replace('T', 'B');
        }
        if (parentPos.right + nodePos.width > document.body.offsetWidth) {
            newPos = position.replace('R', 'L');
        }
        else if (parentPos.right + nodePos.width < document.body.offsetWidth) {
            newPos = position.replace('L', 'R');
        }
        return newPos;
    }
    function checkBoundaries(node) {
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
        const parentPos = parentNode.getBoundingClientRect();
        const newPosition = checkPos(node, parentNode, position);
        node.style.right = '';
        node.style.left = '';
        node.style.bottom = '';
        node.style.top = '';
        if (stickToHookWidth)
            node.style.minWidth = String(parentPos.width) + 'px';
        if (newPosition.includes('B')) {
            node.style.bottom = '';
            node.style.top = String(parentPos.bottom) + 'px';
        }
        if (newPosition.includes('T')) {
            node.style.bottom = '';
            node.style.top = String(parentPos.top - node.offsetHeight) + 'px';
        }
        if (newPosition.includes('L')) {
            node.style.left = String(parentPos.left) + 'px';
        }
        if (newPosition.includes('R')) {
            node.style.left = String(parentPos.left - node.offsetWidth + parentPos.width) + 'px';
        }
        if (newPosition.includes('C')) {
            node.style.left = String((parentPos.left + (parentPos.width / 2)) - (node.offsetWidth / 2)) + 'px';
        }
        checkBoundaries(node);
    }
    intervaller = setInterval(() => {
        setPosition(node, position, parentNode);
    }, 250);
    return {
        destroy() {
            node.remove();
            clearInterval(intervaller);
        }
    };
}
