<script>import { get_current_component } from 'svelte/internal';
import { openPopper } from '../../ui/popper/actions';
import IconButton from './IconButton.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import { createEventForwarder } from '../../engine/engine';
export let icon = 'list';
export let menuData = {};
export let actionComponent = Menu;
export let menuProps = { menuList: menuData };
export let menuPosition = 'BL';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
let componentProps = menuProps ? menuProps : { menuList: menuData };
const onActionClick = (event) => {
    event.stopPropagation();
    openPopper('settingActions', {
        parentNode: event.target,
        component: actionComponent,
        componentProps: componentProps ?? {},
        position: menuPosition
    });
};
</script>

<IconButton
	class={'ButtonMenu ' + className}
	{element}
	icon="faEllipsisH"
	iconFontSize="small"
	on:click={onActionClick}
>
	<slot />
</IconButton>

<style>.buttonActionRoot {
  display: inline-block;
  position: relative;
  width: 64px;
}

.buttonText {
  text-align: center;
}

.button {
  display: block;
  width: 64px;
}
.button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.action {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  width: 30%;
  padding: 0.5rem;
}
.action:hover {
  background-color: rgba(255, 255, 255, 0.5);
}</style>
