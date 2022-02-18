<script >import { getContext } from 'svelte';
import { null_to_empty } from 'svelte/internal';
export let text;
export let icon;
const menuStateContext = getContext('menuStateContext');
if (icon || $$slots.menuItemIconSlot) {
    $menuStateContext.hasIcon = true;
}
</script>

<li role="menuitem" class="menuItem">
	{#if $menuStateContext.hasIcon}
		<div class="menuItemIcon">
			<slot name="menuItemIconSlot">{null_to_empty(icon)}</slot>
		</div>
	{/if}
	<div class="menuItemText">
		<slot>
			<slot name="menuItemTextSlot">{text}</slot>
		</slot>
	</div>
</li>

<style  global>:global(.menu) {
  min-width: 150px;
  padding: 0.25rem;
  cursor: pointer;
  background-color: var(--theme-color-background);
  color: var(--theme-color-text);
  border: 0.5px solid rgba(255, 255, 255, 0.1); }
  :global(.menu.density-tight) :global(.menuItem) {
    padding: 0.5rem 0;
    margin: 0.125rem 0; }
  :global(.menu.density-default) :global(.menuItem) {
    padding: 1rem 0;
    margin: 0.25rem 0; }
  :global(.menu.density-kind) :global(.menuItem) {
    padding: 1.5rem 0;
    margin: 0.5rem 0; }
  :global(.menu) :global(.menuItem) {
    border-radius: 6px;
    overflow: hidden;
    display: flex; }
    :global(.menu) :global(.menuItem:hover) {
      background-color: rgba(255, 255, 255, 0.3); }
    :global(.menu) :global(.menuItem) :global(.menuItemIcon) {
      width: 24px;
      max-width: 24px;
      text-align: center;
      overflow: hidden; }
    :global(.menu) :global(.menuItem) :global(.menuItemText) {
      padding: 0 0.25rem; }
    :global(.menu) :global(.menuItem.density-tight) {
      padding: 0.5rem 0;
      margin: 0.125rem 0; }
    :global(.menu) :global(.menuItem.density-default) {
      padding: 1rem 0;
      margin: 0.25rem 0; }
    :global(.menu) :global(.menuItem.density-kind) {
      padding: 1.5rem 0;
      margin: 0.5rem 0; }
</style>
