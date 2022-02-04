<script lang="ts">
  import {ThemeWrapper, ThemeToggle} from 'svelte-themer';
  import {WindowStoreListType, windowsStore} from '/src/stores/windowStore';
  import StartMenu from '/src/components/ui/startMenu/startMenu.svelte';
  import {openWindow, toggleStartMenu} from '../configurations';

  let countValue;


  windowsStore.subscribe((value: WindowStoreListType) => {
    countValue = value;
  });


</script>

<div class="text">cfvdvfd</div>

<StartMenu />

<style lang="scss" global>
  @import 'node_modules/ress/ress';
  @import 'D:/boulot/app-node/cssfabric/lib/styles/cssfabric.min.css';

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