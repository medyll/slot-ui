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

<div class="bar">
    <slot></slot>
    <div>
        <button on:click={()=>{openPopper('DaPopper',popServiceProps)}}>one
        </button>
    </div>
</div>
<style>
    .bar {
        display: flex;
        align-items: center;
        grid-gap: 8px;
        background-size: auto;
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(20px);
        min-height: 48px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
    }
</style>
