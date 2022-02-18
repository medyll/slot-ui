<script   context="module" ></script>
<script >export let icon;
export let primary;
export let secondary;
export let action;
export let density = 'default';
</script>
<li class="listItemTitle density-{density}">
    {#if icon || $$slots.icon}
    <div class="listItemIcon">
        <slot name="icon"></slot>
    </div>
    {/if}
    <div class="listItemContent">
        {#if primary || $$slots.primary}
            <h5>
                <slot name="primary">{primary}</slot>
            </h5>
        {/if}
        {#if secondary || $$slots.secondary}
            <div>
                <slot name="secondary">{secondary}</slot>
            </div>
        {/if}
    </div>
    <div class="listItemAction">
        <slot name="action"></slot>
    </div>
</li>
<!--
    local instead of global
    means that the sheet is shared at directory level
    useful for compound components,
    css is for cascading
-->
<style  global>:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px; }
  :global(li.listItemTitle) :global(.listItemContent),
  :global(li.listItem) :global(.listItemContent) {
    flex: 1;
    padding: 0 0.5rem; }
  :global(li.listItemTitle) :global(.listItemAction),
  :global(li.listItem) :global(.listItemAction) {
    padding: 0 0.5rem; }
  :global(li.listItemTitle) :global(.listItemIcon),
  :global(li.listItem) :global(.listItemIcon) {
    text-align: center;
    padding: 0 0.5rem;
    overflow: hidden; }
  :global(li.listItemTitle.density-tight),
  :global(li.listItem.density-tight) {
    padding: 0.5rem 0;
    margin: 0.125rem 0; }
  :global(li.listItemTitle.density-default),
  :global(li.listItem.density-default) {
    padding: 1rem 0;
    margin: 0.25rem 0; }
  :global(li.listItemTitle.density-kind),
  :global(li.listItem.density-kind) {
    padding: 1.5rem 0;
    margin: 0.5rem 0; }

:global(.listItemTitle) :global(.listItemContent) :global([slot=primary]) {
  color: red; }

:global(li.listItem:hover) {
  background-color: rgba(255, 255, 255, 0.3); }

:global(li.listItem.isActive) {
  background-color: rgba(255, 255, 255, 0.3); }
  :global(li.listItem.isActive) :global(.listItemChip) {
    position: absolute;
    height: 50%;
    width: 3px;
    background-color: maroon;
    border-radius: 8px;
    left: -1px; }
</style>


<!--i love slots-->
<slot name="iloveslots" />
<!--i love slot more but with less-->
<slot:iloveslots />