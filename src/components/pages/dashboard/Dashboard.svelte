<script lang="ts">
  import {goto} from '$app/navigation';
  import Divider from '$lib/vendor/divider/Divider.svelte';
  import ButtonPanel from '$lib/vendor/button/ButtonPanel.svelte';
  import Menu from '$lib/vendor/menu/Menu.svelte';
  import Avatar from '$lib/vendor/avatar/Avatar.svelte';
  import Alert from '$lib/vendor/alert/Alert.svelte';
  import Select from '$lib/vendor/select/Select.svelte';
  import Paper from '$lib/vendor/paper/Paper.svelte';
  import Icon from '$lib/ui/icon/Icon.svelte';
  import Card from '$lib/vendor/card/Card.svelte';
  import Box from '$lib/vendor/box/Box.svelte';

  const menuData = [
    {text: 'text 1'},
    {text: 'text 2'},
    {text: 'text 3'},
    {text: 'text 3'},
    {text: 'text 3'},
    {text: 'text 3', icon: 'i'}
  ];

  const handleClick = (where: string) => (event) => {
    goto(where);
  };
</script>

<div class="pos-abs w-full h-full overflow-hidden pad-8" style="z-index:0">
    <div class="flex-h">
        <div>
            <Avatar size="small">
                <Icon icon="faCode"/>
            </Avatar>
            <Divider/>
            <Select/>
            <Divider/>
            <Paper density="tight">
                <div class="pad-4 dsp-block-inline flex-v flex-align-middle-center">
                    <button fullWidth on:click={handleClick('explorer')}> explorer</button>
                    <br>
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
        <div class="flex-main pad-4 overflow-auto">
            <Paper density="kind">
                <Alert level="success" message="message here">Simple alert</Alert>
                <Alert level="info" message="message here">Simple alert</Alert>
                <Alert level="error" message="message here">Simple alert
                    <button data-close slot="buttonZoneSlot">button</button>
                </Alert>
                <Alert level="warning" message="message here">Simple alert</Alert>
                <Alert level="alert" message="message here">Simple <br/>alert</Alert>
                <Alert level="discrete" message="message here">Simple alert</Alert>
                <Alert message="message here">
                    alert red
                    <div slot="messageSlot">message here</div>
                    <button data-close slot="buttonZoneSlot">button</button>
                </Alert>
            </Paper>
            <div class="dsp-block-inline shad-16">
                <Box>
                    <span slot="titleSlot">Title of the box</span>
                    content box
                    <span slot="buttonZoneSlot"><button>button</button></span>
                </Box>
                <Box>
                    <span slot="titleSlot">Title of the box</span>
                    content box
                    <span slot="buttonZoneSlot"><button>button</button></span>
                </Box>
            </div>
            <Paper density="kind">
                <div class="gridIcon">
                    {#each [...Array(20)] as key, val}
                        <Card>
                            card
                        </Card>
                    {/each}
                </div>

            </Paper>
        </div>
    </div>
</div>

<style lang="scss">
  .gridIcon {
    width: 100%;
    display: grid;
    align-items: center;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(130px, auto));
  }

</style>
