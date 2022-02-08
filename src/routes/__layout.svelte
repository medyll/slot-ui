<script lang="ts">
  import {ThemeWrapper, ThemeToggle, presets} from 'svelte-themer';
  import Taskbar from '/src/components/ui/taskbar/Taskbar.svelte';
  import Dashboard from '/src/components/pages/dashboard/Dashboard.svelte';
  import StartMenu from '/src/components/ui/startMenu/StartMenu.svelte';
  import Login from '../components/pages/login/Login.svelte';
  import TaskBarContent from "../components/engine/TaskBarContent.svelte";

  let isLogged = true;

  console.log($$slots)

</script>
<ThemeWrapper mode="dark">
    <StartMenu/>
    <div style="height:100%;max-height:100%;overflow:hidden;display:flex;flex-direction: column">
        {#if isLogged}
            <Taskbar>
                <TaskBarContent />
            </Taskbar>
            <div style="flex: 1;overflow:hidden">
                <Dashboard/>
                <slot>empty !!! </slot>
            </div>

        {:else}
            <Login/>
        {/if}
    </div>
</ThemeWrapper>

<style lang="scss" global>
  @import 'ress/ress.css';
  @import '../css/cssFabric/cssfabric.min.css';
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  html {
    font-size: 12px;
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url("back2.png");
    background-size: cover;
    font-family: Roboto;
  }

  #svelte {
    height: 100%;
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