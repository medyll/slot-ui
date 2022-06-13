
/** @deprecated use IChromeOptionsFrameArgs instead */
export type IChromeOptionsArgs<T = Record<string, any>> = {}

export type IChromeOptionsFrameArgs<T = Record<string, any>> = {
  /** fires event on:chromeframe:close */
  onClose?: (chromeFrame?: IChromeFrameArgs) => void,
  /** fires event on:chromeframe:hide */
  onCancel?: (chromeFrame?: IChromeFrameArgs) => void,
  /** fires event on:chromeframe:validate */
  onValidate?: (chromeFrame?: IChromeFrameArgs) => void,
  showCommandBar?: boolean,
  parent?: string,
}
/** @deprecated use IChromeFrameArgs instead */
export interface IChromeArgs<T = Record<string, any>> extends IChromeOptionsFrameArgs { }
export interface IChromeFrameArgs<T = Record<string, any>> extends IChromeOptionsFrameArgs {
  frameId: string | number,
  title?: string,
  open?: boolean,
  minimized?: boolean,
  maximized?: boolean,
  noFrameListButton?: boolean,
  active?: boolean,
  secondaryTitle?: string,
  description?: string,
  path?: string, // url paths
  component?: any,
  componentProps?: any
  parent?: string,
  zIndex?: number
  data?: T,
  position?: {
    x: number;
    y: number;
  }
  defaultPosition?: {
    x: number;
    y: number;
  }
}
