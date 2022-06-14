type ClickAwayProps = {
  parent?: HTMLElement | string
  action?: () => void
  disabled?: boolean
}

const clickAwayParams = {
  listenerSet: false
}

export function clickAway(node: HTMLElement, props: ClickAwayProps) {
  const {action, disabled} = props
  // if (props?.disabled) return false
  // do not propagate if clicked element is node
  node.addEventListener('click', (event: MouseEvent) => {
    event.stopPropagation();
  });
  
  
  const doEvent = function (daNode: any)  {
    if (!disabled) {
      if(action){
        action();
        document.removeEventListener('click', doEvent);
      }
    }
  };
  
 // if (!clickAwayParams.listenerSet) {
    // treat outside click
    document.addEventListener('click', doEvent);
    clickAwayParams.listenerSet = true;
 //}
  
  return {
    destroy() {
       document.removeEventListener('click', doEvent);
    }
  };
}
