<svelte:options accessors/>
<script lang="ts">
  import {chromeFrameListRef, chromeFrameStore} from './chromeFrame.store';
  import ChromeFrame from './ChromeFrame.svelte';
  import {browser} from '$app/environment';
  import type {IChromeFrameArgs, IChromeOptionsArgs} from './types.js';
  import {createEventForwarder} from '$lib/engine/engine.js';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let style: string                  = '';
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  // global parameters for each chromeFrame
  export let chromeListConfig: IChromeOptionsArgs = {};
  let defaultConfig                               = chromeFrameStore.defaultConfigStore;

  // set global conf props to store
  $: if (chromeListConfig) {
    chromeFrameStore.defaultConfigStore.set(chromeListConfig);
  }

  // parent props : append parent element to designed parent
  $: if (browser && element && $defaultConfig.parent) {
    const parent: any = typeof ($defaultConfig.parent) === 'string' ? document.querySelector($defaultConfig.parent) : $defaultConfig.parent;
    try {
      parent.appendChild(element);
    } catch (e) {
      throw new Error('parent does not seems to exist for ChromeFrameList');
    }
  }

  // garbage collector to delete chromeFrameListRef references
  $: Boolean(browser) && Object.keys(chromeFrameListRef).forEach((frameId) => {
    if (!$chromeFrameStore.get(frameId)) {
      console.log('destroy !')
      chromeFrameListRef[frameId].$destroy();
      delete (chromeFrameListRef[frameId]);
    }
  });

  // mount the component in the assigned target with chromeFrameListRef as reference ,
  // if not already in chromeFrameListRef
  $: Boolean(browser) && $chromeFrameStore.forEach((args: IChromeFrameArgs, frameId: string) => { 

    if (!args.noFrameListButton && !chromeFrameListRef[frameId]) {
      chromeFrameListRef[frameId] = new ChromeFrame({
        target: element ,
        props : {
          title: frameId,
          ...chromeListConfig,
          ...args,
          frameId: frameId
        },
      });
    }
  });

  // monitor $chromeFrameStore.size
  $: if (browser && element) {
    if (!$chromeFrameStore.size) {
      element.style.display = 'none';
    } else {
      element.style.display = '';
    }
  }

/*   $: console.log('chromeFrameStore from chrome frame list',$chromeFrameStore);
  $: console.log('var browser, from chrome frame list',browser);
  $: console.log('chromeFrameListRef, from chrome frame list',chromeFrameListRef); */

</script>
<div bind:this={element}
     class="pos-abs h-full w-full top-0 {className}"
     style="z-index:9000;display:none;{style}"
     use:forwardEvents></div>
