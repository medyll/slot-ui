<script lang="ts">
  import {goto} from '$app/navigation';
  import Divider from '$lib/vendor/divider/Divider.svelte';
  import ButtonPanel from '$lib/vendor/button/ButtonAction.svelte';
  import Menu from '$lib/vendor/menu/Menu.svelte';
  import Avatar from '$lib/vendor/avatar/Avatar.svelte';
  import AlertDemo from '$lib/vendor/alert/AlertDemo.svelte';
  import TabsDemo from '$lib/vendor/tabs/Tabs.demo.svelte';
  import CartoucheDemo from '$lib/vendor/cartouche/Cartouche.demo.svelte';
  import Select from '$lib/vendor/select/Select.svelte';
  import Paper from '$lib/vendor/paper/Paper.svelte';
  import Icon from '$lib/vendor/icon/Icon.svelte';
  import Card from '$lib/vendor/card/Card.svelte';
  import Box from '$lib/vendor/box/Box.svelte';
  import Options from '$lib/vendor/select/Options.svelte';

  const menuData = [
    {text: 'text 1'},
    {text: 'text 2'},
    {text: 'text 3'},
    {text: 'text 3'},
    {text: 'text 3'},
    {text: 'text 3', icon: 'i'}
  ];

  const optionsData = [
    {data: {}, text: 'text 1'},
    {data: {}, text: 'text 2'},
    {data: {}, text: 'text 3'},
    {data: {}, text: 'text 3'},
    {data: {}, text: 'text 3'},
    {data: {}, text: 'text 3', icon: 'i'}
  ];
  const handleClick = (where: string) => (event) => {
    goto(where);
  };
</script>

<div class="pos-abs w-full h-full overflow-hidden" style="z-index:0">
    <div class="flex-h  h-full overflow-hidden">
        <div>

            <Select let:option options={optionsData}>
                <Options text={option.text}/>
            </Select>
            <Divider/>
            <Paper density="tight">
                <div class="pad-4 dsp-block-inline flex-v flex-align-middle-center">
                    <button fullWidth on:click={handleClick('explorer')}> explorer</button>
                    <br/>
                    <button on:click={handleClick('what')}> what</button>
                </div>
            </Paper>
            <Paper density="tight">
                <ButtonPanel actionComponent={Menu} actionComponentProps={{ menuList: menuData }}>
                    button is what
                </ButtonPanel>
            </Paper>
            <Menu menuList={menuData}/>
        </div>
        <div class="flex-main pad-4 overflow-auto ">
            <div class="gridDemo">
                <div>
                    <Paper density="kind">
                        <Avatar size="small">
                            <Icon icon="faCode"/>
                        </Avatar>
                        <Avatar size="small">
                            <Icon icon="faCode"/>
                        </Avatar>
                    </Paper>
                    <Paper density="kind">
                        <TabsDemo/>
                    </Paper>
                    <Paper density="kind">
                        <CartoucheDemo/>
                    </Paper>
                    <Paper density="kind">
                        <AlertDemo/>
                    </Paper>
                </div>
                <Paper  density="kind">
                    <Box onClose="cd">
                        <Icon fontSize="small" icon="faClock" slot="iconSlot"/>
                        <span slot="titleSlot">Title of the box</span>
                        <span slot="buttonZoneSlot"><button>button</button></span>
                        Content of the box
                    </Box>
                </Paper>
                <Paper density="kind">
                    <div class="gridIcon">
                        {#each [...Array(20)] as key, val}
                            <Card>
                                <span slot="title">Title of the box</span>
                                content
                                <span slot="footer">Footer of the box</span>
                            </Card>
                        {/each}
                    </div>
                </Paper>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  .gridDemo {
    width: 100%;
    display: grid;
    align-items: stretch;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }

  .gridIcon {
    width: 100%;
    display: grid;
    align-items: center;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(130px, auto));
  }
</style>
