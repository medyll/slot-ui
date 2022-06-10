<script>import { getChromeFrame } from './chromeFrame.utils';
export let frameId;
const frameStore = getChromeFrame(frameId);
</script>

<div class="chromeFrame flex-v pos-abs top-0 h-full overflow-hidden w-full " style="z-index:{$frameStore?.zIndex}">
    <div class="flex-h flex-align-middle gap-small pad-1 border-b">
        <div class="flex-main">{frameId}</div>
        <button on:click={()=>{frameStore.remove();}}>close</button>
    </div>
    <div class="flex-main pos-rel overflow-hidden">
        <svelte:component {...$frameStore.componentProps} this={$frameStore.component}/>
    </div>
</div>
<style global>:global(.chromeFrame) {
  color: var(--theme-color-foreground);
  background-color: var(--theme-color-background);
}</style>