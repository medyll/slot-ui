<script lang="ts">
    import Divider from "$lib/vendor/divider/Divider.svelte";
</script>

<div class="card flex-v shad-32">
    <div class="title"><slot name="cardTitleSlot"></slot></div>
    <div class="content flex-main"><slot name="cardContentSlot"><slot></slot></slot></div>
    <Divider extension="full" />
    <div class="footer"><slot name="cardFooterSlot"></slot></div>
</div>


<style lang="scss">
  .card {
    border-radius: 6px;
    background-color: rgba(#555, 0.2);
    border: 1px solid rgba(208, 191, 151, 0.1);
    padding: 0.5rem;
    height: 120px;
    .title{}
    .content{}
    .footer{}
  }
</style>