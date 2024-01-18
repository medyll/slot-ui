
  import type { SvelteComponentTyped } from "svelte";
  
  
  
  
    export interface PopperProps  {
      
      /**
* popper HTMLDivElement
* @default undefined
*/
      element?: null | HTMLDivElement;

      /**
* @default ''
*/
      class?: string;

      /**
* @default undefined
*/
      code?: undefined;

      /**
* @default undefined
*/
      parentNode?: undefined;

      /**
* @default false
*/
      stickToHookWidth?: boolean;

      /**
* @default undefined
*/
      component?: undefined;

      /**
* @default {}
*/
      componentProps?: {};

      /**
* @default 'BC'
*/
      position?: string;

      /**
* @default undefined
*/
      content?: undefined;

      /**
* @default ''
*/
      style?: string;

      /**
* The popper will be closed on clickAway
* @default false
*/
      autoClose?: boolean;

      /**
* binding : The popper will be opened or is opened
* @default false
*/
      isOpen?: boolean;
    }
  
  
  export default class Popper extends SvelteComponentTyped<
      PopperProps,
      {click: WindowEventMap["click"];
},
      {default: {}
;
holderSlot: {}
;
popperHolder: {}
;}
    > {
      
    
    toggle: undefined;

    
    hide: undefined;

    
    show: undefined;

    
    clickedAway: undefined;

    
    useStickTo: (node) => {     if (position) {         stickTo(node, { parentNode, position: position, stickToHookWidth });     } };
    }