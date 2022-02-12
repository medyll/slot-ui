<script lang="ts">
    import Icon from "../../ui/icon/Icon.svelte";

    export let title:string;
</script>


<div class="pad-2 pad-tb-8 grid-main">
    <h1>{title}</h1>
</div>
<div class="pad-tb-8  grid-h grid-align-top">
    <div class="pad-r-4">
        <Icon  fontSize="big" icon="faFile" />
    </div>
    <div class="pad-1 grid-main">
        <div class="pad-b-1">crefrefre</div>
        <div class="pad-b-1">crefrefre</div>
    </div>
    <div class="pad-1 grid-main">
        <div class="pad-b-1">crefrefre</div>
        <div class="pad-b-1">crefrefre</div>
    </div>
</div>
<div class="header">
    <div class="grid-h grid-align-middle">
        <div class="first">icon</div>
        <div class="second">Header title</div>
    </div>
</div>

<style>
    .header {
        color: #333;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(30px);
        margin: 0.5rem;
        border-radius: 6px;
    }

    .first {
        padding: 2rem;
        width:64px;
    }

    .second {
        padding: 2rem;
    }
</style>
