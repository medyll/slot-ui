<script lang="ts">
  import {ThemeWrapper, ThemeToggle, presets} from 'svelte-themer';
  import Taskbar from '/src/components/ui/taskbar/taskbar.svelte';
  import Dashboard from '/src/components/ui/dashboard/dashboard.svelte';
</script>
<ThemeWrapper mode="dark">
    <Taskbar/>
    <Dashboard/>
    <slot></slot>
</ThemeWrapper>

<style>
    :global(html) {
        /*background-color: var(--theme-colors-background, initial);
        color: var(--theme-colors-text, initial);*/
    }
</style>