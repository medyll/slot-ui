export declare type LisItemProps = {
    icon: string;
    primary: string;
    secondary: string;
    action: string;
    data: Record<string, any>;
};
export declare type LisItemPropsKey = keyof LisItemProps;
export interface ElementProps {
    density: 'tight' | 'default' | 'find';
    expansion: 'full' | 'padded' | 'centered';
}
