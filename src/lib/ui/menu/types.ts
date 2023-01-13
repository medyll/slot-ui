import type { ElementProps } from '$typings/index.js';


export type IMenuProps<T = any> = {
    /** @deprecated */ menuList?: IMenuItemProps[],
    menuItemsList?: IMenuItemProps[],
    menuItemsInstances?: any[], // svelte instances of menu items
    data?: T
    density?: ElementProps['density']
    selectedIndex?: number
    hasIcon?: boolean
    onMenuItemClick?: Function
    actions?: Record<string,(args?:any) => void>  
}

export type IMenuItemProps<T = any> = {
    class?: string | undefined
    text: string
    action: string
    icon?: string
    iconColor: string
    iconSize: string
    divider?:   boolean
    dividerBefore?:   boolean
    data?: T
    selected?: boolean
    onMenuItemClick:()=>void
    itemIndex?: number
    | ElementProps['expansion'];
}
