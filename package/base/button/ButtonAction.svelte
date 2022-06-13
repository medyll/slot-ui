<script>import Icon from '../icon/Icon.svelte';
import { openPopper } from '../../ui/popper/actions';
import { createEventForwarder } from '../../engine/engine';
import { get_current_component } from 'svelte/internal';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
export let icon = 'faList';
export let actionComponent;
export let actionComponentProps;
let buttonRef;
const onActionClick = (event) => {
    event.stopPropagation();
    openPopper('settingActions', {
        parentNode: buttonRef,
        component: actionComponent,
        componentProps: actionComponentProps ?? {}
    });
};
</script>

<div bind:this={element}  use:forwardEvents class="buttonWrapper" on:click>
	<button bind:this={buttonRef}>
		<Icon fontSize="small" icon="faList" />
		{#if actionComponent}
			<span class="action" on:click={onActionClick}>
				<Icon icon="chevron-right" fontSize="tiny" />
			</span>
		{/if}
	</button>
	{#if $$slots.default}
		<div class="pad-tb-1 text-center">
			<slot />
		</div>
	{/if}
</div>

<style>.buttonWrapper {
  color: white;
  display: inline-block;
  position: relative;
  width: 64px;
}
.buttonWrapper button {
  padding: 16px 16px;
  display: block;
  width: 64px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}
.buttonWrapper button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.buttonWrapper button .action {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  width: 30%;
  padding: 0.5rem;
}
.buttonWrapper button .action:hover {
  background-color: rgba(255, 255, 255, 0.5);
}</style>
