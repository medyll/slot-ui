<script lang="ts">
  import {ThemeWrapper, ThemeToggle, presets} from 'svelte-themer';
  import Taskbar from '/src/components/ui/taskbar/taskbar.svelte';
  import Dashboard from '/src/components/ui/dashboard/dashboard.svelte';
  import StartMenu from '/src/components/ui/startMenu/startMenu.svelte';
</script>
<ThemeWrapper mode="dark">
    <Taskbar/>
    <StartMenu/>
    <Dashboard/>
    <slot></slot>
</ThemeWrapper>

<style lang="scss" global>
  @import 'ress/ress.css';
  @import '../css/cssFabric/cssfabric.min.css';

  html {
    font-size: 12px;
  }

  body {
    height: 100%;
    overflow: hidden;
  }

  button {
    border: 0.5px solid #ccc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: white;

    &:hover {
      background-color: #ededed;
    }
  }
</style>