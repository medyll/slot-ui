<svelte:options accessors={true} />

<script>import { get_current_component } from 'svelte/internal';
import { openPopper } from '../../ui/popper/actions';
import IconButton from './IconButton.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import { createEventForwarder } from '../../engine/engine';
export let icon = 'list';
export let menuData = [];
export let actionComponent = Menu;
export let menuProps = {
    menuList: menuData,
    onMenuItemClick: () => {
        console.log('redfered');
    }
};
export let menuPosition = 'BC';
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
let componentProps = menuProps
    ? menuProps
    : {
        menuList: menuData,
        onMenuItemClick: () => { }
    };
const onActionClick = (event) => {
    event.stopPropagation();
    openPopper('settingActions', {
        parentNode: event.currentTarget,
        component: actionComponent,
        componentProps: componentProps ?? {},
        position: menuPosition
    });
};
// on:menu:item:clicked
// on:click={onActionClick}
let openPoppOpt;
$: openPoppOpt = {
    parentNode: element,
    component: actionComponent,
    componentProps: componentProps ?? {},
    position: 'BC',
    disabled: false
};
// usePopperOpt={openPoppOpt}
</script>

<!-- {@debug componentProps} -->

<IconButton
	class={'ButtonMenu ' + className}
	bind:element
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
