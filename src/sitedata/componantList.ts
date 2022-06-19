import Frame from '$lib/ui/frame/Frame.svelte';
import { goto } from '$app/navigation';
import Divider from '$lib/base/divider/Divider.svelte';
import ButtonDemo from '$lib/base/button/Button.demo.svelte';
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
import ListDemo from '$lib/base/list/List.demo.svelte';
import InputDemo from '$lib/base/input/Input.demo.svelte';
import DataListDemo from '$lib/base/datalist/DataList.demo.svelte';

export const slotUiComponentList = [
    {
        name: 'Button component',
        code: 'button',
        component: ButtonDemo
    },
    { name: 'Alert', code: 'Alert', component: AlertDemo },
    { name: 'Tabs', code: 'Tabs', component: TabsDemo },
    { name: 'Cartouche', code: 'Cartouche', component: CartoucheDemo },
    { name: 'Box', code: 'Box', component: BoxDemo },
    { name: 'Card', code: 'Card', component: CardDemo },
    { name: 'Tree', code: 'Tree', component: TreeDemo },
    { name: 'List', code: 'List', component: ListDemo },
    { name: 'Input', code: 'Input', component: InputDemo },
    { name: 'DataList', code: 'DataList', component: DataListDemo }
];
