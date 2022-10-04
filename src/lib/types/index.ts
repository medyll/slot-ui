export type TIcon = string;

/* export namespace Drawer {
  export let title: string;
} */

export interface ElementProps {
  sizeType: 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'big' | 'full' | 'auto',
  inputHeight: 'tiny' | 'small' | 'old' | 'large' | 'none',
  density: 'none' | 'tight' | 'default' | 'medium' | 'kind'
  expansion: 'full' | 'padded' | 'centered',
  alignment: 'center' | 'left' | 'right',
  flow: 'relative'|'absolute'|'fixed'
  data: Record<string, any>;
  action: (event:any, data: ElementProps['data']) => void;
  icon: | TIcon
  | { type: 'fa', name: TIcon };
}

export type Data = Record<string, any>
