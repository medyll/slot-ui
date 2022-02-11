type ClickAwayProps = {
  parent: HTMLElement | string
  action: () => void
  disabled: boolean
}

export function clickAway(node: HTMLElement, props: ClickAwayProps) {
  
  if(props?.disabled) return false
  // do not propagate if clicked element is node
  node.addEventListener('click', (event: MouseEvent) => {
    event.stopPropagation();
  });
  
  // treat outside click
  document.addEventListener('click', doEvent);
  
  function doEvent(event: any) {
    if (props?.action) props?.action();
    document.removeEventListener('click', doEvent);
  }

  /* return (
    destroy()=>{}
  ) */
}
