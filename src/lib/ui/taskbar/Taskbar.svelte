<script lang="ts">
  import {openPopper} from '$lib/vendor/popper/actions';
  import ServiceBox from '../serviceBox/ServiceBox.svelte';

  const popServiceProps = {
    component     : ServiceBox,
    componentProps: {
      some: 'what'
    }
  };
</script>

<div class="bar flex-h flex-align-middle">
    <slot>
        <slot name="taskBarLeft"></slot>
    </slot>
    <div class="flex-main">
        <button on:click={(event)=>{
            event.stopPropagation();
            openPopper('DaPopper',{...popServiceProps})}}>Service Box
        </button>
    </div>
    <slot name="taskBarRIght"></slot>
</div>
<style>
    .bar {
        grid-gap: 8px;
        background-size: auto;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(20px);
        min-height: 48px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
</style>
