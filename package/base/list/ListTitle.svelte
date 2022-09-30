<script>import Icon from '../icon/Icon.svelte';
export let icon = undefined;
/** displayed as H5*/
export let primary = undefined;
/** secondary title */
export let secondary = undefined;
export let action = undefined;
export let density = 'default';
</script>

<li class="listItemTitle density-{density}">
	{#if icon || $$slots.icon}
		<div class="listItemIcon">
			<slot name="icon">
				<Icon {icon} />
			</slot>
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
		<slot />
	</div>
	{#if action || $$slots.action}
	<div class="listItemAction">
		<slot name="action" />
	</div>
	{/if}
</li>

<style global>:global(ul) {
  display: flex;
  flex-direction: column;
}

:global(ul:focus) {
  outline: 0;
  outline-offset: -4px;
}

:global(li.listItemTitle),
:global(li.listItem) {
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  max-width: 100%;
}
:global(li.listItemTitle) :global(.listItemContent),
:global(li.listItem) :global(.listItemContent) {
  flex: 1;
  padding: 0 0.5rem;
  min-width: auto;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemContent) :global([slot=primary]),
:global(li.listItem) :global(.listItemContent) :global([slot=primary]) {
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemContent) :global([slot=secondary]),
:global(li.listItem) :global(.listItemContent) :global([slot=secondary]) {
  opacity: 0.8;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  overflow: hidden;
}
:global(li.listItemTitle) :global(.listItemAction),
:global(li.listItem) :global(.listItemAction) {
  padding: 0 0.5rem;
}
:global(li.listItemTitle) :global(.listItemIcon),
:global(li.listItem) :global(.listItemIcon) {
  text-align: center;
  width: 2rem;
  min-width: 2rem;
  overflow: hidden;
  opacity: 0.8;
}
:global(li.listItemTitle.density-tight),
:global(li.listItem.density-tight) {
  padding: 0.5rem 0;
}
:global(li.listItemTitle.density-default),
:global(li.listItem.density-default) {
  padding: 1rem 0;
}
:global(li.listItemTitle.density-kind),
:global(li.listItem.density-kind) {
  padding: 1.5rem 0;
}

:global(li.listItemTitle) {
  position: sticky;
  margin-top: 1px !important;
  top: 1px;
  background-color: var(--theme-color-background-alpha-low);
  backdrop-filter: blur(1px);
  z-index: 1;
}

:global(li.listItem:hover) {
  background-color: rgba(255, 255, 255, 0.3);
}
:global(li.listItem.isActive) {
  background-color: var(--slotui-listitem-active-background, var(--theme-color-primary-alpha-high, black));
  box-shadow: var(--slotui-listitem-active-boxshadow, var(shad-3));
}
:global(li.listItem.isActive) :global(.listItemChip) {
  position: absolute;
  height: 50%;
  width: 3px;
  background-color: var(--theme-color-primary);
  border-radius: 8px;
  left: -1px;
}</style>
