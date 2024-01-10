import Alertdemosvelte from '$lib/base/alert/Alert.demo.svelte';
import Avatardemosvelte from '$lib/base/avatar/Avatar.demo.svelte';
import Backdropdemosvelte from '$lib/base/backdrop/Backdrop.demo.svelte';
import Boxdemosvelte from '$lib/base/box/Box.demo.svelte';
import Buttondemosvelte from '$lib/base/button/Button.demo.svelte';
import Cartouchedemosvelte from '$lib/base/cartouche/Cartouche.demo.svelte';
import Chipperdemosvelte from '$lib/base/chipper/Chipper.demo.svelte';
import Columnerdemosvelte from '$lib/base/columner/Columner.demo.svelte';
import Dividerdemosvelte from '$lib/base/divider/Divider.demo.svelte';
import Drawerdemosvelte from '$lib/base/drawer/Drawer.demo.svelte';
import Listdemosvelte from '$lib/base/list/List.demo.svelte';
import Progressdemosvelte from '$lib/base/progress/Progress.demo.svelte';
import Ratingdemosvelte from '$lib/base/rating/Rating.demo.svelte';
import Sliderdemosvelte from '$lib/base/slider/Slider.demo.svelte';
import Stepperdemosvelte from '$lib/base/stepper/Stepper.demo.svelte';
import Tabsdemosvelte from '$lib/base/tabs/Tabs.demo.svelte';
import Treedemosvelte from '$lib/base/tree/Tree.demo.svelte';
import AutoCompletedemosvelte from '$lib/data/autocomplete/AutoComplete.demo.svelte';
import DataListdemosvelte from '$lib/data/dataList/DataList.demo.svelte';
import Finderdemosvelte from '$lib/data/finder/Finder.demo.svelte';
import Grouperdemosvelte from '$lib/data/grouper/Grouper.demo.svelte';
import Loaderdemosvelte from '$lib/data/loader/Loader.demo.svelte';
import Sorterdemosvelte from '$lib/data/sorter/Sorter.demo.svelte';
import Confirmdemosvelte from '$lib/base/confirm/Confirm.demo.svelte';
import Inputdemosvelte from '$lib/form/input/Input.demo.svelte';
import Selectdemosvelte from '$lib/form/select/Select.demo.svelte';
import Switchdemosvelte from '$lib/form/switch/Switch.demo.svelte';
import Framedemosvelte from '$lib/ui/frame/Frame.demo.svelte';
import Logindemosvelte from '$lib/ui/login/Login.demo.svelte';
import Menudemosvelte from '$lib/ui/menu/Menu.demo.svelte';
import Paneldemosvelte from '$lib/ui/panel/Panel.demo.svelte';
import Popperdemosvelte from '$lib/ui/popper/Popper.demo.svelte';
import Toastdemosvelte from '$lib/ui/toast/Toast.demo.svelte';
import ToggleBardemosvelte from '$lib/ui/toggleBar/ToggleBar.demo.svelte';
import ToolBardemosvelte from '$lib/ui/toolBar/ToolBar.demo.svelte';
import Windowdemosvelte from '$lib/ui/window/Window.demo.svelte';
import ContextRooterdemosvelte from '$lib/utils/contextRooter/ContextRooter.demo.svelte';
export const slotUiComponentList = [
	{ name: 'Alert', code: 'alert', component: Alertdemosvelte, group: 'base' },
	{ name: 'Avatar', code: 'avatar', component: Avatardemosvelte, group: 'base' },
	{ name: 'Backdrop', code: 'backdrop', component: Backdropdemosvelte, group: 'base' },
	{ name: 'Box', code: 'box', component: Boxdemosvelte, group: 'base' },
	{ name: 'Button', code: 'button', component: Buttondemosvelte, group: 'base' },
	{ name: 'Cartouche', code: 'cartouche', component: Cartouchedemosvelte, group: 'base' },
	{ name: 'Chipper', code: 'chipper', component: Chipperdemosvelte, group: 'base' },
	{ name: 'Columner', code: 'columner', component: Columnerdemosvelte, group: 'base' },
	{ name: 'Divider', code: 'divider', component: Dividerdemosvelte, group: 'base' },
	{ name: 'Drawer', code: 'drawer', component: Drawerdemosvelte, group: 'base' },
	{ name: 'List', code: 'list', component: Listdemosvelte, group: 'base' },
	{ name: 'Progress', code: 'progress', component: Progressdemosvelte, group: 'base' },
	{ name: 'Rating', code: 'rating', component: Ratingdemosvelte, group: 'base' },
	{ name: 'Slider', code: 'slider', component: Sliderdemosvelte, group: 'base' },
	{ name: 'Stepper', code: 'stepper', component: Stepperdemosvelte, group: 'base' },
	{ name: 'Tabs', code: 'tabs', component: Tabsdemosvelte, group: 'base' },
	{ name: 'Tree', code: 'tree', component: Treedemosvelte, group: 'base' },
	{ name: 'AutoComplete', code: 'autocomplete', component: AutoCompletedemosvelte, group: 'data' },
	{ name: 'DataList', code: 'datalist', component: DataListdemosvelte, group: 'data' },
	{ name: 'Finder', code: 'finder', component: Finderdemosvelte, group: 'data' },
	{ name: 'Grouper', code: 'grouper', component: Grouperdemosvelte, group: 'data' },
	{ name: 'Loader', code: 'loader', component: Loaderdemosvelte, group: 'data' },
	{ name: 'Sorter', code: 'sorter', component: Sorterdemosvelte, group: 'data' },
	{ name: 'Confirm', code: 'confirm', component: Confirmdemosvelte, group: 'form' },
	{ name: 'Input', code: 'input', component: Inputdemosvelte, group: 'form' },
	{ name: 'Select', code: 'select', component: Selectdemosvelte, group: 'form' },
	{ name: 'Switch', code: 'switch', component: Switchdemosvelte, group: 'form' },
	{ name: 'Frame', code: 'frame', component: Framedemosvelte, group: 'ui' },
	{ name: 'Login', code: 'login', component: Logindemosvelte, group: 'ui' },
	{ name: 'Menu', code: 'menu', component: Menudemosvelte, group: 'ui' },
	{ name: 'Panel', code: 'panel', component: Paneldemosvelte, group: 'ui' },
	{ name: 'Popper', code: 'popper', component: Popperdemosvelte, group: 'ui' },
	{ name: 'Toast', code: 'toast', component: Toastdemosvelte, group: 'ui' },
	{ name: 'ToggleBar', code: 'togglebar', component: ToggleBardemosvelte, group: 'ui' },
	{ name: 'ToolBar', code: 'toolbar', component: ToolBardemosvelte, group: 'ui' },
	{ name: 'Window', code: 'window', component: Windowdemosvelte, group: 'ui' },
	{
		name: 'ContextRooter',
		code: 'contextrooter',
		component: ContextRooterdemosvelte,
		group: 'utils'
	}
];
