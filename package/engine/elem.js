const elem = (node) => {
    return {
        find: (qy) => { return node.querySelector(qy); },
        findAll: (qy) => { return node.querySelectorAll(qy); },
        up: (qy, index) => {
            if (!qy)
                return node.parentNode;
            return _recursivelyFind(node, 'parentNode', qy, index);
        },
        next: (qy, index) => {
            if (!qy)
                return node.parentNode;
            return _recursivelyFind(node, 'nextSibling', qy, index);
        },
        previous: (qy, index) => {
            if (!qy)
                return node.parentNode;
            return _recursivelyFind(node, 'previousSibling', qy, index);
        },
        setStyle: (element, styles) => {
            const elementStyle = element.style;
            for (const property in styles) {
                // @ts-ignore
                elementStyle[property] = styles[property];
            }
            return element;
        }
    };
};
function _recursivelyFind(element, property, expression, index) {
    expression = expression || 0;
    index = index || 0;
    /*if (Object.isNumber(expression)) {
     index = expression, expression = null;
     }*/
    while (element = element[property]) {
        if (element.nodeType !== 1)
            continue;
        if (!element.matches(expression))
            continue;
        if (--index >= 0)
            continue;
        return element;
    }
}
function setStyle(element, styles) {
    const elementStyle = element.style;
    for (const property in styles) {
        // @ts-ignore
        elementStyle[property] = styles[property];
    }
    return element;
}
export { elem };
