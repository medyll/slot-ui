<script lang="ts">
  import {stickTo} from '$lib/uses/stickTo/stickTo';

  let innerRef;
  let inputRef;
  let absolute           = 'absolute';
  let isVisible: boolean = false;

  const show = (visible: boolean) => (event) => {
       isVisible = visible
  };

</script>


<input bind:this={inputRef} id="cool" on:blur={show(false)} on:focus={show(true)}/>
<div bind:this={innerRef} class="pos-abs shad-16 select inputBorder" style="display:{isVisible?'block':'none'}"
     use:stickTo={{parentNode:document.getElementById('cool'),position:'BR'}}>
    ss
</div>

<style lang="scss" global>
  .select {
    background-color: rgba(255, 255, 255, 0.2);
    height: 160px;
    width: 160px;
    border-radius: 6px;
  }
</style>
