import type { ElementProps } from "src/types"


export type MenuProps<T = any> = {
    density: ElementProps['density'],
    hasIcon?: boolean
    data?: T
    action?: () => void
}

export type MenuItemProps<T = any>  = {
    text: string
    icon: string
    data?: T
    action?: () => void
    divider: | boolean
             | ElementProps['expansion'];
}
