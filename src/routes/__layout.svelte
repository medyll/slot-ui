<script lang="ts">
  import {ThemeWrapper} from 'svelte-themer';
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
  import {userStore} from '../components/pages/login/store';

  let drawerRef: Drawer;

  const onItemClick = function () {
    drawerRef.toggle();
  };

</script>

<ThemeWrapper theme={'dark'} themes={themes}>
    <StartMenu/>  
    <div class="h-full overflow-hidden flex-v">
        {#if $userStore.logged}
            <Taskbar>
                <TaskBarContent/>
                <div slot="taskBarRIght">
                    <IconButton on:click={onItemClick} iconFontSize="small" icon="faAccusoft"/>
                </div>
            </Taskbar>
            <div class="flex-main overflow-hidden">
                <Dashboard/>
                <slot />
            </div>
        {:else}
            <Login/>
        {/if}
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
  @import '~@medyll/cssfabric/lib/styles/cssfabric.min.css';
  @import '~@medyll/cssfabric/lib/styles/cssfabric.responsive.min.css';

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
