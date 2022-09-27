import type { ElementProps } from '$typings/index.js';


export type MenuProps<T = any> = {
    menuList: MenuItemProps[]
    density?: ElementProps['density'],
    hasIcon?: boolean
    data?: T
    onMenuItemClick?: Function
    action?: () => void /** @deprecated */
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
