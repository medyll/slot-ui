export type IChromeArgs = {
  frameId: string | number,
  title?: string,
  open?: boolean,
  minimized?: boolean,
  maximized?: boolean,
  active?: boolean,
  secondaryTitle?: string,
  description?: string,
  onClose?: () => {},
  onCancel?: () => {},
  onValidate?: () => {},
  noFrameButton?:boolean,
  component?: any,
  componentProps?: any
  parent?: string,
  zIndex?: number
  position?: {
    x: number;
    y: number;
  }
  defaultPosition?: {
    x: number;
    y: number;
  }
}