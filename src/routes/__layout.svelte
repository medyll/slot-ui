<script lang="ts">
  import {ThemeWrapper, ThemeToggle, presets} from 'svelte-themer';
  import Taskbar from '/src/lib/ui/taskbar/Taskbar.svelte';
  import Dashboard from '/src/components/pages/dashboard/Dashboard.svelte';
  import StartMenu from '/src/lib/ui/startMenu/StartMenu.svelte';
  import Login from '../components/pages/login/Login.svelte';
  import TaskBarContent from '../lib/engine/TaskBarContent.svelte';
  import Drawer from '$lib/vendor/drawer/Drawer.svelte';
  import TopBar from '../lib/vendor/topBar/TopBar.svelte';
  import IconButton from '$lib/vendor/button/IconButton.svelte';
  import List from '$lib/vendor/list/List.svelte';
  import ListItem from '$lib/vendor/list/ListItem.svelte';
  import {themes} from '../themes/themes';

  let isLogged = true;

  let drawerRef: Drawer;

  const onItemClick = function () {
    drawerRef.toggle();
  };
</script>

<ThemeWrapper theme={'dark'} themes={themes}>
    <StartMenu/>
    <div style="height:100%;max-height:100%;overflow:hidden;display:flex;flex-direction: column">
        {#if isLogged}
            <Taskbar>
                <TaskBarContent/>
                <div slot="taskBarRIght">
                    <IconButton on:click={onItemClick} iconFontSize="small" icon="faAccusoft"/>
                </div>
            </Taskbar>
            <div style="flex: 1;overflow:hidden">
                <Dashboard/>
                <slot>empty !!!</slot>
            </div>
        {:else}
            <Login/>
        {/if}
    </div>
    <Drawer bind:this={drawerRef}>
        <svelte:fragment slot="drawerMenuBar">
            <TopBar title="Drawer with menu bar ">
                <svelte:fragment slot="menuBarSwitcher">
                    <div class="pad-1">
                        <input placeholder="Search in Bar" style="width:100%;" type="text"/>
                    </div>
                </svelte:fragment>
            </TopBar>
        </svelte:fragment>
        <div class="pad-2" slot="content">
            <List onItemClick={() => {}}>
                {#each [...Array(10)] as key, val}
                    <ListItem>
                        <span slot="primary">Some idiom {val}</span>
                        <span slot="action"><button>fds de action</button></span>
                    </ListItem>
                {/each}
            </List>
        </div>
    </Drawer>
</ThemeWrapper>

<style lang="scss" global>
  @import 'ress/ress.css';
  @import '../css/cssFabric/cssfabric.min.css';
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  html {
    font-size: 12px;
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    // background-image: url('back2.png');
    background-size: cover;
    font-family: 'Rubik';
    background-color: var(--theme-color-background);
    color: var(--theme-color-text);
  }

  #svelte {
    height: 100%;
  }

  button {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: #ededed;
    }
  }

  input {
    border: 1px solid rgba(208, 191, 151, 0.5);
    border-bottom: 2px solid rgb(208, 191, 151);
    border-radius: 4px;
    padding: 0.5rem;
    box-shadow: inset 0px 0px 3px 1px rgba(51, 51, 51, 0.8);
    background-color: rgba(59, 59, 59, 0.99);
    color: white;
  }
</style>
