import * as actions from './action-types';
import { catalogInitialState } from './initial-state';
import { CatalogState } from './state';

export default function catalogReducer(
  state: CatalogState = catalogInitialState,
  action: actions.CatalogAction
): CatalogState {
  switch (action.type) {
    case actions.GET_CATALOG_SUCCESS:
      return {
        catalog: action.results,
      };
    default:
      return state;
  }
}
