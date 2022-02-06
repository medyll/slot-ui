<script lang="ts">
  import List from '../../components/vendor/list/List.svelte';
  import ListItem from '../../components/vendor/list/ListItem.svelte';
  import ListTitle from '../../components/vendor/list/ListTitle.svelte';

  const handleClick = (one) => (event: PointerEvent) => {
    console.log(one, event);
  };
</script>

<div class="explorerFrame">
    <div class="appbar">
        the title of the frame
    </div>
    <div class="explorerContainer">
        <div class="navLeft">
            <input type="search" style="width:100%;" placeholder="redfer" />
            <List>
                <ListTitle>title</ListTitle>
                {#each [...Array(2)] as key,val}
                    <ListItem code="{key}" on:click={handleClick('reddy')}>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each [...Array(4)] as key,val}
                    <ListItem code="{val}" on:click={handleClick('reddy')}>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each [...Array(7)] as key}
                    <ListItem on:click={handleClick('reddy')}>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
                <ListTitle>title</ListTitle>
                {#each [...Array(30)] as key}
                    <ListItem on:click={handleClick('reddy')}>
                        <span slot="icon">icon</span>
                        <div slot="primary">primary text</div>
                        <div slot="secondary">secondary text</div>
                        <span slot="action">action</span>
                    </ListItem>
                {/each}
            </List>
        </div>
        <div class="content">
            <slot name="content"></slot>
            {#each [...Array(12)] as key}
                <div class="buttonPole"> </div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
  .explorerFrame {
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(30px);

    .appbar {
      padding: 2rem;
      color: white;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    }

    .explorerContainer {
      display: flex;
      flex: 1;
      overflow: hidden;

      .navLeft {
        width: 270px;
        height: 100%;
        overflow: auto;
        padding:1rem;
      }

      .content {
        flex: 1;

      }
    }

  }
</style>