export type GroupItemType = {
	primary: string;
	secondary: string;
	icon?: string;
	data?: Record<string, any>;
};

export type GroupTitleType = {
	isGroup: boolean;
	code: string;
	primary: string;
	data?: Record<string, any>;
};

export type GroupedDataType = [GroupTitleType, Data[]][];

export type Data = Record<string, any>;
