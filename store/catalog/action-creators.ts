import * as actions from './action-types';

export function getCatalog(): actions.GetCatalogAction {
  return {
    type: actions.GET_CATALOG,
  };
}

export function getCatalogRequest(): actions.GetCatalogRequestAction {
  return {
    type: actions.GET_CATALOG_REQUEST,
  };
}

export function getCatalogSuccess(results: any[]): actions.GetCatalogSuccessAction {
  return {
    type: actions.GET_CATALOG_SUCCESS,
    results,
  };
}

export function getCatalogFailure(error: Error | string): actions.GetCatalogFailureAction {
  return {
    type: actions.GET_CATALOG_FAILURE,
    error,
  };
}
