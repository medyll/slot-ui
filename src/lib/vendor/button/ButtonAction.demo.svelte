<script lang="ts">
    import ButtonAction from "./ButtonAction.svelte";
    import Debug from "../debug/Debug.svelte";
    import Divider from "../divider/Divider.svelte";
</script>
<div class="flex-h">
    <ButtonAction actionComponent={Debug}  />
    <Divider direction="vertical" />
    <ButtonAction actionComponent={Debug}>With some description text</ButtonAction>
</div>