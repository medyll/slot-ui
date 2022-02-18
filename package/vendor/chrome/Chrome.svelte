<script context="module"  >export let red = 'cool';
</script>

<script >import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import ChromeNav from './ChromeNav.svelte';
import ChromeContent from './ChromeContent.svelte';
let store = writable(opt);
export const opt = {
    store,
    actions: {
        togglePanel
    }
};
setContext('store', opt);
function togglePanel() {
    $store.store;
}
</script>

<div>
    <ChromeNav></ChromeNav>
    <ChromeContent></ChromeContent>
</div>