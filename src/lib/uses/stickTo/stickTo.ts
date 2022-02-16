type StickToProps = {
  parentNode: HTMLElement
  position?: 'TL' | 'TR' | 'BR' | 'B' | 'BL'
  disabled?: boolean
}

export function stickTo(node: HTMLElement, props: StickToProps) {
  const {parentNode, position} = props;
  if (node && parentNode) {
    const parentPos = parentNode.getBoundingClientRect();
    
 
    switch (position) {
      case 'BL':
        node.style.top  = String(parentPos.bottom) + 'px';
        node.style.left = String(parentPos.left) + 'px';
        break;
      case 'BR':
        node.style.top  = String(parentPos.bottom) + 'px';
        node.style.left = String(parentPos.right) + 'px';
        break;
      default:
      case 'TR':
        node.style.top  = String(parentPos.top) + 'px';
        node.style.left = String(parentPos.right) + 'px';
        break;
      case 'TL':
        node.style.top  = String(parentPos.top) + 'px';
        node.style.left = String(parentPos.left) + 'px';
        break;
    }
    
    
  }else{
    node.style.bottom  = String(0)
    node.style.right  = String(0)
  }
  
  return {
    destroy() {
      //  document.removeEventListener('click', doEvent);
    }
  };
}