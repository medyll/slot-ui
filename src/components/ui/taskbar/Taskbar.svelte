<script lang="ts">
  import {openPopper} from '/src/components/vendor/popper/actions';
  import ServiceBox from '../serviceBox/ServiceBox.svelte';

  const popServiceProps = {
    component     : ServiceBox,
    componentProps: {
      some: 'what'
    }
  };
</script>

<div class="bar grid-h grid-align-middle">
    <slot>
      <slot name="taskBarLeft"></slot>
    </slot>
    <div class="grid-main">
        <button on:click={()=>{openPopper('DaPopper',popServiceProps)}}>one
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
