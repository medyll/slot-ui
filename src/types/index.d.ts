export type TIcon = string;

export namespace Drawer {
  export let title: string;
}

export interface ElementProps {
  sizeType: 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'big',
  density: 'none' | 'tight' | 'default' | 'kind'
  expansion: 'full' | 'padded' | 'centered',
  alignment: 'center' | 'left' | 'right',
  data: Record<string, any>;
  action: (event, data: ElementProps['data']) => void;
  icon: | TIcon
        | { type: 'fa', name: TIcon };
}