


export type ColumnerStoreType = Record<string, ColumnType>

export interface ColumnType {
    columnId: string,
    state: keyof typeof states
}


const states = ['expanded','equal','minimal','default']
