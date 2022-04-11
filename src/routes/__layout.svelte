<svelte:head>
    <title>SlotUi</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
    <link href="cssfabric/cssfabric.vars.css" rel="stylesheet">
</svelte:head>

<script lang="ts">
  import {ThemeWrapper} from 'svelte-themer';
  import Taskbar from '/src/lib/ui/taskbar/Taskbar.svelte';
  import Dashboard from '/src/components/pages/dashboard/Dashboard.svelte';
  import StartMenu from '/src/lib/ui/startMenu/StartMenu.svelte';
  import Login from '../lib/ui/login/Login.svelte';
  import TaskBarContent from '../lib/engine/TaskBarContent.svelte';
  import Drawer from '$lib/base/drawer/Drawer.svelte';
  import TopBar from '../lib/base/topBar/TopBar.svelte';
  import IconButton from '$lib/base/button/IconButton.svelte';
  import List from '$lib/base/list/List.svelte';
  import ListItem from '$lib/base/list/ListItem.svelte';
  import {themes} from '../themes/themes';

  let drawerRef: Drawer;

  const onItemClick = function () {
    drawerRef.toggle();
  };

</script>

<ThemeWrapper theme={'dark'} themes={themes}>
    <StartMenu/>
    <div class="h-full overflow-hidden flex-v">
        <Login showLogin={true}>
            <Taskbar>
                <TaskBarContent/>
                <div slot="taskBarRIght">
                    <IconButton icon="faAccusoft" iconFontSize="small" on:click={onItemClick}/>
                </div>
            </Taskbar>
            <div class="flex-main overflow-hidden">
                <Dashboard/>
                <slot/>
            </div>
        </Login>
    </div>
    <Drawer bind:this={drawerRef} isOpen={false}>
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

<style global lang="scss">
  //@import "../node_modules/@medyll/cssfabric/lib/styles/cssfabric.min";
  @import '@medyll/cssfabric/lib/styles/cssfabric.min.css';
  /*@import '~@medyll/cssfabric/lib/styles/cssfabric.responsive.min.css';*/

  @import url('https://fonts.googleapis.com/css?family=Rubik');

  html {
    font-size: 12px;
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url('wallp (4).jpg');
    background-size: cover;
    font-family: 'Rubik';
    background-color: var(--theme-color-background);
    color: var(--theme-color-text);
  }

  #svelte {
    height: 100%;
  }

  button {
    color: var(--theme-color-text);
    border: 0.5px solid var(--theme-border_color);
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(208, 191, 151, 0.2);
    }

    &[disabled] {
      color: var(--color-gray-800)
    }
  }

  .inputBorder {
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
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
