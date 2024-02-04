export interface ApiObject<Type> {
  data: Type;
  meta?: {
    errors?: [k: keyof Type, msg: string][];
  };
}

export interface ApiPagination {
  pages: number;
  current: number;
  total: number;
}

export interface ApiList<Type> {
  data: Type[];
  meta: ApiPagination;
}

export interface CommonHash {
  [key: string]: any;
}

interface Record {
  id: number;
  created_at?: string;
  updated_at?: string;
}

export interface Product extends Record {
  name: string;
  net_price?: number;
}
