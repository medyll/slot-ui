import { elem } from '../../elem';

type StickToProps = {
  parentNode: HTMLElement
  position?: 'TL' | 'TR' | 'BR' | 'B' | 'BL'
  disabled?: boolean
}

export function stickTo(node: HTMLElement, props: StickToProps) {
  const { parentNode, position } = props;
  if (node && parentNode) {

    const parentPos = parentNode.getBoundingClientRect();

    document.getElementById('svelte').appendChild(node)

    setPosition(node, position, parentNode)


  } else {
    node.style.bottom = String(0)
    node.style.right = String(0)
  }

  node.addEventListener('click',(event)=>event.preventDefault())
  function setPosition(node: HTMLElement, position: any, parentNode: HTMLElement) {
    const style: Record<string, any> = {}
    const parentPos = parentNode.getBoundingClientRect();

    switch (position) {
      case 'B':
        node.style.top = String(parentPos.bottom) + 'px';
        node.style.left = String(parentPos.left) + 'px';
        node.style.right = String(parentPos.right) + 'px';
        break;
      case 'BL':
        node.style.top = String(parentPos.bottom) + 'px';
        node.style.left = String(parentPos.left) + 'px';
        break;
      case 'BR':
        node.style.top = String(parentPos.bottom) + 'px';
        node.style.left = String(parentPos.right) + 'px';
        break;
      case 'TL':
        node.style.top = String(parentPos.top) + 'px';
        node.style.left = String(parentPos.left) + 'px';
        break;
      default:
      case 'TR':
        node.style.top = String(parentPos.top) + 'px';
        node.style.left = String(parentPos.right) + 'px';
        break;
    }
    return style;
  }

  return {
    destroy() {
      //  document.removeEventListener('click', doEvent);
    }
  };
}
