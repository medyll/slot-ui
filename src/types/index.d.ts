export namespace Drawer {
  export let title: string;
}

export interface ElementProps {
  density: 'tight' | 'default' | 'kind';
  data: Record<string, any>;
  action: (event, data: ElementProps['data']) => void;
  icon: | string
        | { type: 'fa', name: string };
}