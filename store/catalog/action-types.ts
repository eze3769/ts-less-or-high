export const GET_CATALOG = 'catalogActionTypes/GET_CATALOG';
export interface GetCatalogAction {
  type: typeof GET_CATALOG;
}

export const GET_CATALOG_REQUEST = 'catalogActionTypes/GET_CATALOG_REQUEST';
export interface GetCatalogRequestAction {
  type: typeof GET_CATALOG_REQUEST;
}

export const GET_CATALOG_SUCCESS = 'catalogActionTypes/GET_CATALOG_SUCCESS';
export interface GetCatalogSuccessAction {
  type: typeof GET_CATALOG_SUCCESS;
  results: any[];
}

export const GET_CATALOG_FAILURE = 'catalogActionTypes/GET_CATALOG_FAILURE';
export interface GetCatalogFailureAction {
  type: typeof GET_CATALOG_FAILURE;
  error: Error | string;
}

export type CatalogAction =
  | GetCatalogAction
  | GetCatalogRequestAction
  | GetCatalogSuccessAction
  | GetCatalogFailureAction;
