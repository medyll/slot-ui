

export type Items = {
    label: string,
    code: string,
    withUid?: string | number,
    withContent?: any,
    withComponent?: any,
    componentProps?: Record<string, any>
}

export type TabsItemsProps = Items[];
