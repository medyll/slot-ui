
export type DataListStoreType = Record<string, CellType>

export interface CellType {
    /** internal use */
    index: number,
    /** column identifier data.id ?? generated */
    columnId: string | number,
    width: string
}
