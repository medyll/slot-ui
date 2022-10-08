<script lang="ts">
  import { componentReadMe } from "$sitedata/api/indexApi.js";
  import { slotuiCatalog } from "$lib/slotuiCatalog.js";
  export let component: string = "";
  export let cite: string = "";

  $: finalCompReadMe = componentReadMe?.[component.toLowerCase()];

  const compDet = Object.values(slotuiCatalog).find(
    (x) => x.name === component
  );
</script>

<div class="flex-v gap-large w-full">
  <div class="flex-h gap-small flex-align-middle">
    <h4>{`<${component} />`}</h4>
    <span>{compDet?.group}/{compDet?.code}.svelte</span>
  </div>
  <cite><p>{@html cite}</p></cite>
  {#if $$slots.default}
    <div class="flex-v gap-medium ">
      <h5>Component {component} examples :</h5>
      <div class="marg-l-4"><slot /></div>
    </div>
  {/if}
  <div class="flex-v gap-medium ">
    <h5>Api preview :</h5>
    <div class="marg-l-4">
      <pre class="language-ts"><code
          ><svelte:component this={finalCompReadMe} /></code></pre>
    </div>
  </div>
  <div class="flex-v gap-medium ">
    <h5>Link to api :</h5>
    <div class="marg-l-4">
      <a href="svelte-components/{component.toLowerCase()}/api"
        >Api for component "{component}"</a>
    </div>
  </div>
</div>
