<script>import { getContext } from 'svelte';
let name = getContext('name');
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
/*  end slotUi exports*/
</script>
