export class idqlWhere {
  
  private _eq!: any;
  private _lk!: any;
  private _gt!: any;
  private _gte!: any;
  private _in!: any;
  private _lt!: any;
  private _lte!: any;
  private _ne!: any;
  private _nin!: any;
  
  eq(value: any) {
    this._eq = value;
  }
  
  lk(value: any) {
    this._eq = value;
  }
  
  gt(value: any) {
    this._gt = value;
  }
  
  gte(value: any) {
    this._gte = value;
  }
  
  in(value: any) {
    this._in = value;
  }
  
  lt(value: any) {
    this._lt = value;
  }
  
  lte(value: any) {
    this._lte = value;
  }
  
  ne(value: any) {
    this._ne = value;
  }
  
  nin(value: any) {
    this._nin = value;
  }
}