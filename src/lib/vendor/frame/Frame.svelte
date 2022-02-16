<script lang="ts">

</script>
<div class="flex-v h-full overflow-hidden frame">
    <div>
        <slot name="frameHeaderSlot"></slot>
    </div>
    <div class="frameContainer flex-h flex-main overflow-hidden">
        <div class="navLeft flex-v h-full overflow-hidden">
            <slot name="navLeftHeaderFrameSlot"></slot>
            <slot name="navLeftFrameSlot"></slot>
        </div>
        <div class="h-full flex-main flex-v ">
            <div>
                <slot name="contentHeaderFrameSlot"></slot>
            </div>
            <div class="flex-main overflow-auto">
                <slot name="contentFrameSlot"></slot>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
  .frame {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: rgba(35, 31, 26, 0.5);
    backdrop-filter: blur(30px);
    color: white;

    .frameContainer {

      .navLeft {
        width: 270px;
        min-width: 270px;
      }

      .content {
        flex: 1 auto;

      }
    }

  }
</style>