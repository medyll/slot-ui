<!--
Wrapper for the toaster family
called automatically
-->
<script lang="ts">
  export let toasterId: any = "defaultToasterRoot"; 


</script>

<div style="position:fixed;bottom:0;right:0;margin:1rem;" class="flex-v gap-tiny" data-toasterId={toasterId}>
    <slot />
</div>
