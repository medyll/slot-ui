<script lang="ts">

  export let value: number;
  export let ceiling: number;
  export let position: { x: 'left' | 'right' | 'center', y: 'top' | 'bottom' | 'center' } = {
    x: 'right', y: 'top'
  };

  const xM = {
    left  : 'left:0',
    right : 'right:0',
    center: 'left:50%;transformation:translate(-50%,0)',
  };
  const yM = {
    top   : 'top:0',
    bottom: 'bottom:0',
    center: 'top:50%;transformation:translate(0,-50%)',
  };
</script>

{#if value > ceiling}
<span class="badge" style="{xM[position.x]};{yM[position.y]}">
<slot>{value}</slot>
</span>
{/if}

<style lang="scss">
  .badge {
    position: absolute;
    border-radius: 50%;
    border: 1px solid red;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;

    .hidden {
      transform: scale(0, 0);
    }
  }
</style>