import type { Data } from "$types"


export interface CellType {
    /** internal use */
    index: number,
    /** column identifier data.id ?? generated */
    columnId: string | number,
    width: string
    order?: number
    dataField?: string | ((data: any) => void)
}


export interface DataListStoreType {
    config: {
        isSortable?: boolean
        defaultSortByField?: string
        defaultSortByOrder: 'asc' | 'desc' | 'none' | string
        sortingIcons: Record<string,string[]>
    }
    sortBy: {
        activeSortByField?: string
        activeSortByOrder?: 'asc' | 'desc' | 'none' | string
    }
    columns: CellType[]
    data: Data[]
}
