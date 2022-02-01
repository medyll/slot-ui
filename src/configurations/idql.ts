import {apiConfig} from './api';
import axios, {AxiosInstance, AxiosResponse} from 'axios';

export type IDQlQ = {
  method: 'post'
  scheme: string
  distinct: string
  limit: number
  page: number
  sort: string
  where: Partial<IDQWhere & IDQLogical & IDQQuery & IDQElement>
}

type IDQWhere = {
  'eq': any,
  'lk': any,
  'gt': any,
  'gte': any,
  'in': any,
  'lt': any,
  'lte': any,
  'ne': any,
  'nin': any
}

type IDQLogical = {
  'and': Record<string, any>,
  'not': Record<string, any>,
  'nor': Record<string, any>,
  'or': Record<string, any>,
}

type IDQQuery = {
  'all': any,
  'elemMatch': any,
  'size': any,
}

type IDQElement = {
  exists: any,
  type: any
}

export class idqlTypes {
  protected method!: 'post';
  protected _scheme!: string;
  protected _distinct!: string;
  protected _limit!: number;
  
  protected _page!: number;
  protected _sort!: Record<string, any>;
  protected _where!: any;
  protected _group!: any;
}

const apiRequest: AxiosInstance = axios.create({
  baseURL     : apiConfig.host,
  maxRedirects: 0,
});

export class idqlBuilder<T = any> extends idqlTypes {
  
  constructor() {
    super();
  }
  
  scheme(value: string) {
    this._scheme = value;
    
    return this;
  }
  
  distinct(value: string) {
    this._distinct = value;
    return this;
  }
  
  group(value: string) {
    this._group = value;
    return this;
  }
  
  limit(value: number) {
    this._limit = value;
    return this;
  }
  
  page(value: number) {
    this._page = value;
    return this;
  }
  
  sort(value: Record<string, any>) {
    this._sort = value;
    return this;
  }
  
  idql(value: Partial<IDQlQ['where']> = {}) {
    this._where = value;
    return this;
  }
  
  list<T = any>(): Promise<retQY<T>> {
    return apiRequest.post<any, AxiosResponse<retQY<T>>>(apiConfig.host + '/' + this._scheme, {
      method  : this.method,
      scheme  : this._scheme,
      distinct: this._distinct,
      limit   : this._limit,
      page    : this._page,
      sort    : this._sort,
      where   : this._where,
    }).then((res) => { return res.data;});
  }
  
  groupBy<T = any>(): Promise<grpRetQY<T>> {
    return apiRequest.post<any, AxiosResponse<grpRetQY<T>>>(apiConfig.host + '/' + this._scheme, {
      method  : this.method,
      scheme  : this._scheme,
      distinct: this._distinct,
      limit   : this._limit,
      page    : this._page,
      sort    : this._sort,
      where   : this._where,
      group   : this._group,
    }).then((res) => { return res.data;});
  }
}

type retQY<T = any> = {
  rs: T[],
  options: {
    api_root: string,
    request_uri: string,
    qy_code_type: string,
  },
  query: any,
  record_count: number
}
type grpRetQY<T = Record<string, any>> = {
  _id: Record<string, string>
  group: T[],
  count: number
}[]

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

/*
 
 const idql = new idqlBuilder( );
 
 idql.scheme('agent').idql({eq: {idagent: 1}})*/
