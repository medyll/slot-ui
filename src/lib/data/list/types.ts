export type LisItemProps = {
	icon?: string;
	primary: string;
	secondary: string;
	action?: string;
	data: Record<string, any>;
};

export type LisItemPropsKey = keyof LisItemProps;

export interface ElementProps {
	density: 'none' | 'tight' | 'default' | 'kind';
	expansion: 'full' | 'padded' | 'centered';
}
