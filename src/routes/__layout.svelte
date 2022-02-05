<script lang="ts">
  import {ThemeWrapper, ThemeToggle, presets} from 'svelte-themer';
  import Taskbar from '/src/components/ui/taskbar/taskbar.svelte';
  import Dashboard from '/src/pages/dashboard/Dashboard.svelte';
  import StartMenu from '/src/components/ui/startMenu/StartMenu.svelte';
  import Login from "../pages/login/Login.svelte";

  let isLogged = true;

</script>
<ThemeWrapper mode="dark">
    {#if isLogged}
        <Taskbar/>
        <StartMenu/>
        <Dashboard/>
        <slot>sss</slot>
    {:else}
        <Login />
    {/if}
</ThemeWrapper>

<style lang="scss" global>
  @import 'ress/ress.css';
  @import '../css/cssFabric/cssfabric.min.css';

  html {
    font-size: 12px;
    height:100%;
  }

  body {
    height: 100%;
    overflow: hidden;
  }

  #svelte{
    height:100%;
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

  input {
    border: 1px solid rgb(208, 191, 151);
    border-bottom: 2px solid rgb(208, 191, 151);
    border-radius: 4px;
    padding: 0.5rem;
    box-shadow: inset 0px 0px 3px 1px rgba(51, 51, 51, 0.5);
    background-color: rgb(48, 41, 36);
    color: white
  }
</style>