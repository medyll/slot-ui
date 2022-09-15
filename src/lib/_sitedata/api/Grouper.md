```typescript 
__propDef: {
    props: {
        class?: string | undefined;
        element?: HTMLDivElement | null | undefined;
        /** Grouper mode */ grouperMode?: "button" | "menu" | undefined;
        /** binding : final grouped data as raw object  */ groupedData?: Record<string, any> | undefined;
        /** binding : final grouped data computed by component, available to slotui model caller */ groupedTemplateData?: GroupedDataType | undefined;
        /** list of available groups shown to user */ groupListItems?: string[] | undefined;
        /** data to group */ data: Data[];
        /** field from data to group by*/ groupByField?: string | undefined;
        /** presented field from data to group by*/ groupByTitleField?: string | undefined;
        /** order on which the grouped list is sorted */ groupByOrder?: "desc" | "asc" | undefined;
        /** show ungrouped data */ showUnGrouped?: boolean | undefined;
        /** ungrouped title when show ungrouped data props is set to true */ ungroupedTitle?: string | undefined;
        /** active group field, usefull when several */ activeGroupField?: string | undefined;
        /** grouping function */ groupBy?: ((dataList: any[], groupField: string, opt?: {
            keepUngroupedData: boolean;
            fieldTitle?: string;
        }) => GroupedDataType) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};

 ```