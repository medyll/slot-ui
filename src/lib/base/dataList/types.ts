import type { Data } from "$types"


export interface CellType {
    /** internal use */
    index: number,
    /** column identifier data.id ?? generated */
    columnId: string | number,
    width: string
    style?: string
    order?: number
    dataField?: string | ((data: any) => void)
    htmlElement?: HTMLElement
}

export interface RowType { 
    data?: Data 
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
    idField?: string
    selectedRowId?: string
    columns: CellType[]
    columnsDef: Record<string,CellType>
    data: Data[]
}
