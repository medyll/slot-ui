
export type UseContentSwitcherProps = {
    parent: HTMLElement | string
    disabled?: boolean
}

export const useContentSwitcher = (node: HTMLElement, props: UseContentSwitcherProps) => {

    console.log(node.parentNode)
    return {
        destroy: () => {

        }
    }
}
