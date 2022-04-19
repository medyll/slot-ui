<script lang="ts">
  import {goto} from '$app/navigation';
  import Divider from '$lib/base/divider/Divider.svelte';
  import ButtonPanel from '$lib/base/button/ButtonMenu.svelte';
  import ButtonActionDemo from '$lib/base/button/ButtonAction.demo.svelte';
  import Menu from '$lib/ui/menu/Menu.svelte';
  import Avatar from '$lib/base/avatar/Avatar.svelte';
  import AlertDemo from '$lib/base/alert/AlertDemo.svelte';
  import TabsDemo from '$lib/base/tabs/Tabs.demo.svelte';
  import CartoucheDemo from '$lib/base/cartouche/Cartouche.demo.svelte';
  import BoxDemo from '$lib/base/box/Box.demo.svelte';
  import Select from '$lib/base/select/Select.svelte';
  import Paper from '$lib/base/paper/Paper.svelte';
  import Icon from '$lib/base/icon/Icon.svelte';
  import CardDemo from '$lib/base/card/Card.demo.svelte';
  import Options from '$lib/base/select/Options.svelte';
  import TreeDemo from '$lib/base/tree/Tree.demo.svelte';

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
                <div>
                    <Paper density="kind">
                        <ButtonActionDemo/>
                    </Paper>
                    <Paper density="kind">
                        <BoxDemo/>
                    </Paper>
                    <Paper>
                        <Menu menuList={menuData}/>
                    </Paper>
                </div>
                <div>
                    <Paper density="kind">
                        <CardDemo />
                    </Paper>
                    <Paper density="kind">
                        <TreeDemo />
                    </Paper>
                </div>
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
