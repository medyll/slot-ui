<script lang="ts">

  export let name: string;
  export let checked: boolean;

</script>

<div class="switch">
    <div class="switchGutter">
        <div class="switchHandle"></div>
    </div>
</div>
<input name="{name}" type="hidden"/>

<style lang="scss">
  .switch {
    &.disabled {

    }
    .switchGutter {
      .switchHandle {

      }
    }
  }
</style>