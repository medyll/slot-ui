import type { Data } from "$types"


export interface DataCellType {
    /** internal use */
    index: number,
    /** column identifier data.id ?? generated */
    columnId: string | number,
    width: string
    headerStyle?: string
    style?: string
    order?: number
    field?: string
    fieldTitle?: string
    getter?: (data: Record<string, unknown>) => void
    htmlElement?: HTMLElement
}

export interface RowType { 
    data?: Data 
}

export interface groupByOptions {
    showMainHeader?: boolean,
    showSubGroupsHeader?: boolean
    showEmptyGroup?: boolean
    subPaginationSize?: number 
}
export interface DataListStoreType {
    config: {
        isSortable?: boolean
        defaultSortByField?: string
        defaultSortByOrder: 'asc' | 'desc' | 'none' | string
        sortingIcons: Record<string, string[]>
        noWrap?: boolean
        dataTypes?: Record<string, (item:any) => any>
    }
    sortBy: {
        activeSortByField?: string
        activeSortByOrder?: 'asc' | 'desc' | 'none' | string
    }
    groupBy:{
        groupByField: string | string[]
        groupByOptions: groupByOptions
    }
    idField?: string
    selectedRowId?: string
    columns: Record<string,DataCellType>
    headerNodes?: Record<string,DataCellType>,
    hasColumnsProps?: boolean;
    data: Data[]
}
