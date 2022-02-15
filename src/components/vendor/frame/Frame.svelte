<script lang="ts">

</script>
<div class="grid-v h-full overflow-hidden">
    <div>
        <slot name="frameHeaderSlot"></slot>
    </div>
    <div class="grid-main overflow-hidden">
        <div class="navLeft flex-v h-full">
            <slot name="navLeftFrameSlot"></slot>
        </div>
        <div class="h-full flex-v">
            <div>
                <slot name="contentHeaderFrameSlot"></slot>
            </div>
            <div class="grid-main overflow-auto">
                <slot name="contentFrameSlot"></slot>
            </div>
        </div>
    </div>
</div>