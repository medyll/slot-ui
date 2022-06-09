<script lang="ts">
  // from svelte-virtual-list ([demo](https://svelte.dev/repl/f78ddd84a1a540a9a40512df39ef751b))
  import {onMount, tick} from 'svelte';
  import {createEventForwarder} from '../../engine/engine';
  import {get_current_component} from 'svelte/internal';

  /*  common slotUi exports*/
  let className = '';
  export {className as class};
  export let element: HTMLDivElement | null = null;
  const forwardEvents                       = createEventForwarder(get_current_component());
  /*  end slotUi exports*/

  // props
  export let items;
  export let height     = '100%';
  export let itemHeight = undefined;

  let foo;

  // read-only, but visible to consumers via bind:start
  export let start = 0;
  export let end   = 0;

  // local state
  let height_map      = [];
  let rows;
  let viewport;
  let contents;
  let viewport_height = 0;
  let visible;
  let mounted;

  let top    = 0;
  let bottom = 0;
  let average_height;

  $: visible = items.slice(start, end).map((data, i) => {
    return {index: i + start, data};
  });

  // whenever `items` changes, invalidate the current heightmap
  $: if (mounted) refresh(items, viewport_height, itemHeight);

  async function refresh(items, viewport_height, itemHeight) {
    const {scrollTop} = viewport;

    await tick(); // wait until the DOM is up to date

    let content_height = top - scrollTop;
    let i              = start;

    while (content_height < viewport_height && i < items.length) {
      let row = rows[i - start];

      if (!row) {
        end = i + 1;
        await tick(); // render the newly visible row
        row = rows[i - start];
      }

      const row_height = height_map[i] = itemHeight || row.offsetHeight;
      content_height += row_height;
      i += 1;
    }

    end = i;

    const remaining = items.length - end;
    average_height  = (top + content_height) / end;

    bottom            = remaining * average_height;
    height_map.length = items.length;

  }

  async function handle_scroll() {
    const {scrollTop} = viewport;

    const old_start = start;

    for (let v = 0; v < rows.length; v += 1) {
      height_map[start + v] = itemHeight || rows[v].offsetHeight;
    }

    let i = 0;
    let y = 0;

    while (i < items.length) {
      const row_height = height_map[i] || average_height;
      if (y + row_height > scrollTop) {
        start = i;
        top   = y;

        break;
      }

      y += row_height;
      i += 1;
    }

    while (i < items.length) {
      y += height_map[i] || average_height;
      i += 1;

      if (y > scrollTop + viewport_height) break;
    }

    end = i;

    const remaining = items.length - end;
    average_height  = y / end;

    while (i < items.length) height_map[i++] = average_height;
    bottom = remaining * average_height;

    // prevent jumping if we scrolled up into unknown territory
    if (start < old_start) {
      await tick();

      let expected_height = 0;
      let actual_height   = 0;

      for (let i = start; i < old_start; i += 1) {
        if (rows[i - start]) {
          expected_height += height_map[i];
          actual_height += itemHeight || rows[i - start].offsetHeight;
        }
      }

      const d = actual_height - expected_height;
      viewport.scrollTo(0, scrollTop + d);
    }

    // TODO if we overestimated the space these
    // rows would occupy we may need to add some
    // more. maybe we can just call handle_scroll again?
  }

  // trigger initial refresh
  onMount(() => {
    rows    = contents.children;
    mounted = true;
  });
</script>

<style>
    virtualize-viewport {
        position: relative;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: block;
    }

    virtualize-content{
        display: block;
    }

</style>

<virtualize-viewport
        bind:offsetHeight={viewport_height}
        bind:this={viewport}
        on:scroll={handle_scroll}
        style="height: {height};"
>
    <div style="position:sticky;top:0">
        <slot name="virtualizeHeaderSlot" />
    </div>
    <virtualize-content
            bind:this={contents}
            style="padding-top: {top}px; padding-bottom: {bottom}px;"
    >
        {#each visible as row (row.index)}
            <slot item={row.data}>Missing template</slot>
        {/each}
    </virtualize-content>
</virtualize-viewport>
