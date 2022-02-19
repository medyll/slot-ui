import type { ElementProps } from "src/types"


export type MenuProps<T> = {
    density: ElementProps['density'],
    hasIcon?: boolean
    data?: T
    action?: () => void
}

export type MenuItemProps = {
    text: string
    icon: string
    action?: () => void
    divider: | boolean
             | ElementProps['expansion'];
}
