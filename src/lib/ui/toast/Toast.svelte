<script lang="ts">


  import type {SvelteComponentDev} from 'svelte/internal';
  import Box from '$lib/base/box/Box.svelte';
  import {toastStore} from './store.js';
  import {onMount} from 'svelte';
  import Toaster from './Toaster.svelte';

  export let toastId: any                              = crypto.randomUUID();
  export let autoClose: boolean                        = false;
  export let autoCloseDelay: number                    = 5000;
  export let component: SvelteComponentDev | undefined = undefined;
  export let componentProps: any | undefined           = undefined;
  export let toasterId: any                            = 'defaultToasterRoot';
  export let element;

  let isOpen: boolean = true;
  // ensure is in store, not to show twice
  if (!$toastStore[toastId]) {
    $toastStore[toastId] = {
      toastId,
      autoClose,
      autoCloseDelay,
      component,
      componentProps
    };
  }

  onMount(() => {
    // check parentNode toasterId
    if (!document.body.querySelector('[data-toasterId=' + toasterId + ']')) {
      let a = new Toaster({
        target: document.body,
        props : {toasterId},
      });

      console.log(a);
    }

    document.body.querySelector('[data-toasterId="' + toasterId + '"]')
            .appendChild(document.body.querySelector('[data-toastId="' + toastId + '"]'));

    if (autoClose) {
      setTimeout(() => {
        isOpen = false;
      }, autoCloseDelay ?? 5000);
    }
  });

</script>

<Box style="width:auto;" data-toastId="{toastId}" {isOpen} {...$$restProps}>
    <slot/>
</Box>

<style lang="scss">
  @import "../../styles/slotui-vars.css";
  @import "../../styles/presets.scss";
</style>