<script lang="ts">
  import type { MenuItemProps } from "$lib/ui/menu/types.js";
  import type { PopperPositionType } from "$lib/ui/popper/types.js";
  import { type UsePopperProps } from "$lib/ui/popper/usePopper.js";
  import ComponentExample from "$components/demo/ComponentExample.svelte";
  import Demoer from "$lib/base/demoer/Demoer.svelte";
  import DemoPage from "$lib/base/demoer/DemoPage.svelte";
  import type { ElementProps } from "$lib/types/index.js";
  import Debug from "../debug/Debug.svelte";
  import Icon from "../icon/Icon.svelte";
  import Button from "./Button.svelte";
  import Menu from "$lib/ui/menu/Menu.svelte";
  import MenuItem from "$lib/ui/menu/MenuItem.svelte";
  import { uiPresets } from "$lib/engine/presets.js";
	import { defaultsArgs } from "../demoer/demoer.utils";

  type ParameterType = {
    sizes: ElementProps["sizeType"][];
    height: ElementProps["inputHeight"][];
  };

  let paraold: ParameterType = {
    sizes: ["tiny", "small", "medium", "large"],
    height: ["tiny", "small", "default", "large"],
  };

  const menuData: MenuItemProps[] = [
    { text: "text 1" },
    { text: "text 2" },
    { text: "text 3" },
    { text: "text 3" },
    { text: "text 3" },
    { text: "text 3", icon: "i" },
  ];

  const popPos: PopperPositionType[] = ["T", "TL", "TR", "B", "BL", "BR"];

  const variants: string[] = ["link", "contained", "bordered"];

  const usePopper: UsePopperProps = {
    component: Debug,
    componentProps: {
      title: "title box",
      content: "content",
    },
  };

  let multiple = {
    bgTheme: {
      none: { bgTheme: undefined },
      primary: { bgTheme: "primary" },
      secondary: { bgTheme: "secondary" },
      tertiary: { bgTheme: "tertiary" },
    },
  };

  let parametersMenu: any = {
    position: {
      type: "position",
      values: uiPresets.position,
    },
  };

  let styleParameters: any = {
    color: {
      type: "color-preset",
      values: [undefined,"primary", "secondary", "tertiary"],
    },
    naked: {
      type: "boolean",
      values: [true, false],
    },
    contained: {
      type: "boolean",
      values: [true, false],
    },
    bordered: {
      type: "boolean",
      values: [true, false],
    },
    link: {
      type: "boolean",
      values: [true, false],
    },
  };

  let styleDefaultArgs = defaultsArgs(styleParameters);

  let parameters: any = {
    size: {
      type: "size-preset",
      values: Object.keys(uiPresets.width),
    },
    height: {
      type: "size-preset",
      values: Object.keys(uiPresets.width),
    },
    density: {
      type: "density-preset",
      values: Object.keys(uiPresets.density),
    },
    loading: {
      type: "boolean",
      values: [true, false],
    },
    showChip: {
      type: "boolean",
      values: [true, false],
    },
  };

  let parametersProps: any = {
    icon: {
      type: "icon",
      values: ["icon-park-outline:avatar", "carbon:phone-ip"],
    },
    iconSize: {
      type: "size-preset",
      values: Object.keys(uiPresets.width),
    },
    iconColor: {
      type: "color",
      values: ["red", "green", "#564547", "orange"],
    },
    primary: {
      type: "string",
      values: ["primary 1", "primary 2"],
    },
    secondary: {
      type: "string",
      values: ["secondary 1", "secondary 2"],
    },
    ...parameters,
  };

console.log(styleDefaultArgs);

  let componentArgs = {
    icon: "icon-park-outline:avatar",
    size: "default",
    iconSize: "default",
    showChip: false,
  };

let code = `
<Button on:click={()=>{}} >
	My button
	<Icon slot="startButtonSlot" icon="..." />
	<Icon slot="endButtonSlot" icon="..." />
</Button>`;

  let code2 = `
<Button on:click={()=>{}} >
	My button
</Button>`;
</script>

<ComponentExample
  component="Button"
  cite="There were a place where we used to click. You've called it a button, and we clicked yes.<br /> R. Falgt, 1354"
>
  <div class="flex-v gap-medium">
    <DemoPage title="Using slots" {code} component="Button">
      <Demoer {parameters} {componentArgs} let:activeParams>
        <Button {...activeParams}
          >Using slots
          <Icon icon="user" slot="startButtonSlot" />
          <span slot="loadingIconButtonSlot"
            ><Icon icon="loading" rotate /></span
          >
        </Button>
      </Demoer>
    </DemoPage>
    <DemoPage subTitle="Styling props" component="Button">
      <Demoer
        parameters={styleParameters}
        {multiple}
        componentArgs={componentArgs}
        let:activeParams
      >
        <Button {...activeParams}
          >Using slots
          <Icon icon="user" slot="startButtonSlot" />
          <span slot="loadingIconButtonSlot"
            ><Icon icon="loading" rotate /></span
          >
        </Button>
      </Demoer>
    </DemoPage>
    <DemoPage subTitle="Menu buttons" component="Button">
      <Demoer parameters={parametersMenu} {componentArgs} let:activeParams>
        <Button>
          default action
          <span slot="popper">
            <Menu style="max-height:350px;overflow:auto" density="default">
              <MenuItem divider={true} text="strict">menu</MenuItem>
              <MenuItem data={{ some: "data" }} text="strict">item</MenuItem>
              <MenuItem data={{ some: "data" }} text="strict">item</MenuItem>
              <MenuItem data={{ some: "data" }} text="strict">item</MenuItem>
            </Menu>
          </span>
        </Button>
      </Demoer>
    </DemoPage>
    <DemoPage title="Using props" code={code2} component="Button">
      <Demoer parameters={parametersProps} {componentArgs} let:activeParams>
        <Button {...activeParams}>Using props</Button>
      </Demoer>
    </DemoPage>
    <DemoPage subTitle="Menu buttons" component="Button">
      <Demoer parameters={parametersMenu} {componentArgs} let:activeParams>
        <Button
          size="medium"
          usePopper={{ ...usePopper, position: activeParams?.position }}
          primary="Menu {activeParams?.position ?? ''}"
        />
      </Demoer>
    </DemoPage>
  </div>
</ComponentExample>
