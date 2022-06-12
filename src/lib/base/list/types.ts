export type LisItemProps = {
  icon: string;
  primary: string;
  secondary: string;
  action: string;
  data: Record<string, any>;
}

export type LisItemPropsKey = keyof LisItemProps

/** @deprecated use src/types  */
export interface ElementProps {
  density  : 'none' | 'tight' | 'default' | 'kind'  ;
  expansion: 'full' | 'padded' | 'centered'
}
