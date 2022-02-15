export namespace Drawer {
  export let title: string;
}

export interface ElementProps {
  density: 'tight' | 'default' | 'kind';
  icon: | string
        | { type: 'fa', name: string };
}