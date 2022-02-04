

type ClickAwayProps = {
  parent: HTMLElement | string
  action: ()=> void
}

export function clickAway(node: HTMLElement, clickAwayProps: ClickAwayProps) {
  // do not propagate if clicked element is node
  node.addEventListener('click', (event: MouseEvent) => {
    event.stopPropagation();
  });
 
  // treat outside click
  document.addEventListener('click', doEvent );
  
  function doEvent(event){
    if(clickAwayProps.action) clickAwayProps.action();
    document.removeEventListener('click', doEvent);
  }
}