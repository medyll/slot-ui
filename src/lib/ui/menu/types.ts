import type { ElementProps } from '$typings/index.js';


export type MenuProps<T = any> = {
    /** @deprecated */ menuList?: MenuItemProps[],
    menuItemsList?: MenuItemProps[],
    menuItemsInstances?: any[], // svelte instances of menu items
    data?: T
    density?: ElementProps['density']
    selectedIndex?: number
    hasIcon?: boolean
    onMenuItemClick?: Function
    actions?: Record<string,(args?:any) => void>  
}

export type MenuItemProps<T = any> = {
    text: string
    icon?: string
    data?: T
    action?: () => void
    divider?: | boolean
    dividerBefore?: | boolean
    | ElementProps['expansion'];
}
