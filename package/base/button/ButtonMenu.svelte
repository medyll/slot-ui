<script>import { get_current_component } from 'svelte/internal';
import { openPopper } from '../../ui/popper/actions';
import IconButton from './IconButton.svelte';
import Menu from '../../ui/menu/Menu.svelte';
import { createEventForwarder } from '../../engine/engine';
export let icon = 'faList';
export let actionComponent;
export let actionComponentProps;
/*  common slotUi exports*/
let className = '';
export { className as class };
export let element = null;
const forwardEvents = createEventForwarder(get_current_component());
/*  end slotUi exports*/
const onActionClick = (event) => {
    event.stopPropagation();
    console.log(event.target);
    openPopper('settingActions', {
        parentNode: event.target,
        component: Menu,
        componentProps: actionComponentProps ?? {},
        position: 'BL'
    });
};
</script>

<div class="buttonActionRoot">
    <IconButton
            class={className}
            {element}
            icon="faEllipsisH"
            iconFontSize="small"
            on:click={onActionClick}
    >
        <slot/>
    </IconButton>
</div>

<style>.buttonActionRoot {
  display: inline-block;
  position: relative;
  width: 64px;
}
.buttonActionRoot .buttonText {
  text-align: center;
}
.buttonActionRoot .button {
  display: block;
  width: 64px;
}
.buttonActionRoot .button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.buttonActionRoot .action {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  width: 30%;
  padding: 0.5rem;
}
.buttonActionRoot .action:hover {
  background-color: rgba(255, 255, 255, 0.5);
}</style>
