import * as All1 from '@fortawesome/free-solid-svg-icons'; // add faSolid
import * as All2 from '@fortawesome/free-brands-svg-icons';
import * as All3 from '@fortawesome/free-regular-svg-icons';

let IconTypes = {...All1, ...All2, ...All3} as const;

export type TIcon = keyof typeof IconTypes;

export namespace Drawer {
  export let title: string;
}

export interface ElementProps {
  sizeType: 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'big',
  density: 'none' | 'tight' | 'default' | 'kind'
  expansion: 'full' | 'padded' | 'centered'
  data: Record<string, any>;
  action: (event, data: ElementProps['data']) => void;
  icon: | TIcon
        | { type: 'fa', name: TIcon };
}