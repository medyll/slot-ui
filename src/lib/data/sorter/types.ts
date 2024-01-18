export type SorterFieldType = {
	sortByField: string;
	sortByTitleField?: string;
	sortByOrder?: 'asc' | 'desc' | 'none';
	order?: number;
};

export type SortItem = {};
export type Data = Record<string, any>;
