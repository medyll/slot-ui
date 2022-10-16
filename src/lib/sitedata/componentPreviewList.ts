import Avatarpreviewsvelte from "$lib/base/avatar/Avatar.preview.svelte"; 
import Cartouchepreviewsvelte from "$lib/base/cartouche/Cartouche.preview.svelte"; 
import Listpreviewsvelte from "$lib/base/list/List.preview.svelte"; 
import Tabspreviewsvelte from "$lib/base/tabs/Tabs.preview.svelte"; 
import Treepreviewsvelte from "$lib/base/tree/Tree.preview.svelte"; 
import DataListpreviewsvelte from "$lib/data/dataList/DataList.preview.svelte"; 
import Loaderpreviewsvelte from "$lib/data/loader/Loader.preview.svelte"; 
import Confirmpreviewsvelte from "$lib/form/confirm/Confirm.preview.svelte";  
 export const slotUiComponentPreviewList = [ {name:"Avatar",code:"avatar",component:Avatarpreviewsvelte,group:"base"},
{name:"Cartouche",code:"cartouche",component:Cartouchepreviewsvelte,group:"base"},
{name:"List",code:"list",component:Listpreviewsvelte,group:"base"},
{name:"Tabs",code:"tabs",component:Tabspreviewsvelte,group:"base"},
{name:"Tree",code:"tree",component:Treepreviewsvelte,group:"base"},
{name:"DataList",code:"datalist",component:DataListpreviewsvelte,group:"data"},
{name:"Loader",code:"loader",component:Loaderpreviewsvelte,group:"data"},
{name:"Confirm",code:"confirm",component:Confirmpreviewsvelte,group:"form"} ] 