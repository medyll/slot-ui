export interface SxProps extends Partial<CSSStyleDeclaration> {
  p?: number[];
  px: number,
  py: number,
  m?: number[];
  mx: number,
  my: number,
  w?: number;
  h?: number;
  debug?: boolean;
  // rotate?: number;
  pointer?: boolean;
  radius?: number;
  brd?: number;
  brdb?: number;
  brdt?: number;
  brdr?: number;
  brdl?: number;
  brdx?: number;
  brdy?: number;
  alignCenter?: boolean;
  shadow?: boolean;
}

/**
 *
 * @param {HTMLElement} node
 * @param {SxProps} sty
 */
export function sx4u(node: HTMLElement, sty: SxProps) {
  
  const sx4uClassPrefix = node.classList[0] ?? 'random-letter-number';
  const sx4uClassName   = 'sx4u-' + node.tagName.toLowerCase()+'-'+sx4uClassPrefix;
  
  const test            = node.className.includes('sx4u-');
  if (test) return;
  // add sx4uClassName
  node.classList.add(sx4uClassName);
  // create style fragment
  const styleEl = document.createElement('style', {is: 'new'});
  styleEl.setAttribute('type', 'text/css');
  document.head.appendChild(styleEl);
  // Grab style element's sheet
  let styleSheet = styleEl.sheet;
  
  const style: Record<string, any>                         = {};
  const transformKeys: Partial<Record<keyof SxProps, any>> = {
    p   : 'padding',
    px  : ['paddingLeft', 'paddingRight'],
    py  : ['paddingTop', 'paddingBottom'],
    m   : 'margin',
    mx  : ['marginLeft', 'marginRight'],
    my  : ['marginTop', 'marginBottom'],
    brd : ['border'],
    brdt: ['borderTop'],
    brdr: ['borderRight'],
    brdb: ['borderBottom'],
    brdl: ['borderLeft'],
    brdx: ['borderLeft', 'borderRight'],
    brdy: ['borderTop', 'borderBottom'],
  };
  
  const transform: Partial<Record<keyof SxProps, any>> = {
    p   : (p) => reducePad(p, transformKeys['p']),
    px  : (px) => transNumericProps(px, transformKeys['px']),
    py  : (py) => transNumericProps(py, transformKeys['py']),
    m   : (m) => reducePad(m, transformKeys['m']),
    mx  : (mx) => transNumericProps(mx, transformKeys['mx']),
    my  : (my) => transNumericProps(my, transformKeys['my']),
    w   : (w) => transNumericProps(w, ['width']),
    h   : (h) => transNumericProps(h, ['height']),
    brd : (brd) => transBorderProps(brd, transformKeys['brd']),
    brdt: (brdt) => transBorderProps(brdt, transformKeys['brdt']),
    brdr: (brdr) => transBorderProps(brdr, transformKeys['brdr']),
    brdb: (brdb) => transBorderProps(brdb, transformKeys['brdb']),
    brdl: (brdl) => transBorderProps(brdl, transformKeys['brdl']),
    brdx: (brdx) => transBorderProps(brdx, transformKeys['brdx']),
    brdy: (brdy) => transBorderProps(brdy, transformKeys['brdy']),
    // rotate : (rotate) => style.transform = `rotate(${rotate}deg)`,
    pointer: (pointer) => style.cursor = pointer ? 'pointer' : '',
    radius : (radius) => style.borderRadius = `${radius}px`,
    shadow : (shadow) => style.boxShadow = `0px 0px ${shadow}px rgba(196, 211, 241, 0.85)`,
  };
  
  const diff = doTransform(sty);
  applySheet(diff);
  
  
  function doTransform(args: SxProps) {
    return Object.keys(args).reduce(function (previousValue, styKey, index) {
      let newVal;
      if (transform[styKey]) {
        newVal = Object.assign(previousValue, transform[styKey](args[styKey as any]));
      } else {
        newVal = {...previousValue, [styKey]: args[styKey]};
      }
      
      return newVal;
    }, {});
  }
  
  function reducePad(values: number | number[], arg?: string) {
    if (Array.isArray(values)) {
      const res = values.map((val, index) => {
        return transNumericProps(val);
      }, []).join(' ');
      
      return arg ? {[arg]: res} : res;
    } else {
      return arg ? {[arg]: transNumericProps(values)} : transNumericProps(values);
    }
  }
  
  function transNumericProps(val: number, prop?: string[]) {
    if (prop && prop.length) {
      return prop.reduce((prev, arg, index) => {
        return {...prev, [arg]: transNumericProps(val)};
      }, {});
    } else {
      return (val) / 2 + 'rem';
    }
  }
  
  function transBorderProps(val: number, prop?: string[]) {
    return prop.reduce((prev, arg, index) => {
      return {...prev, [arg]: `${val}px solid red`};
    }, {});
  }
  
  function camelCaseToDash(str) {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  }
  
  function applySheet(diff) {
    let str = '';
    for (const red of Object.keys(diff)) {
      str += camelCaseToDash(red) + ': ' + diff[red] + ';';
    }
    
    // styleSheet.insertRule('.daRule {'+str+'}',styleSheet.cssRules.length); // , styleSheet.cssRules.length
    styleEl.innerText = `.${sx4uClassName}{${str}}.${sx4uClassName}{} `; // , styleSheet.cssRules.length
  }
  
}