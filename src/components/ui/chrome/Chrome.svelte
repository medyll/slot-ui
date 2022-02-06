<script context="module"  lang="ts">
  export let red = 'cool';
</script>

<script lang="ts">
  import {setContext} from 'svelte';
  import {writable} from 'svelte/store';
  import ChromeNav from './ChromeNav.svelte';
  import ChromeContent from './ChromeContent.svelte';


  let store = writable<typeof opt>(opt);

  export const opt = {
    store,
    actions: {
      togglePanel
    }
  };

  setContext('store', opt);

  function togglePanel() {
    $store.store;
    //$store = 'Mike';
  }

</script>

<div>
    <!-- nav left -->
    <ChromeNav></ChromeNav>
    <ChromeContent></ChromeContent>
</div>