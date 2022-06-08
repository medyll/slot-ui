<svelte:options accessors/>
<script lang="ts">
  import * as d3 from 'd3';
  import {chromeFrameListRef, chromeFrameStore} from './chromeFrame.store';
  import ChromeFrame from './ChromeFrame.svelte';
  import {browser} from '$app/env';
  import type {IChromeArgs} from './types';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let style: string = ''
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  $: Object.keys(chromeFrameListRef).forEach((frameId) => {
    if (!$chromeFrameStore.get(frameId)) {
      chromeFrameListRef[frameId].$destroy();
      delete (chromeFrameListRef[frameId]);
    }
  });

  $: $chromeFrameStore.forEach((args:IChromeArgs, frameId: string) => {
    if (!args.noFrameButton && !chromeFrameListRef[frameId]) {
      chromeFrameListRef[frameId] = new ChromeFrame({
        target: document.getElementById('chromeFrameListContainer') ?? document.body,
        props : {
          title: frameId,
          ...args,
          frameId: frameId
        },
      });
    }
  });

  $: if (browser) {
    if (!$chromeFrameStore.size) {
      d3.selectAll('#chromeFrameListContainer').style('display', 'none');
    } else {
      d3.selectAll('#chromeFrameListContainer').style('display', '');
    }
  }
</script>
<div use:forwardEvents bind:this={element} class="pos-abs h-full w-full top-0 {className}" id="chromeFrameListContainer" style="z-index:9000;display:none;{style}"></div>