import { Action, createReducer, on} from '@ngrx/store';

import { removeShelve, updateShelve } from '../helpers/reducer.helper';
import * as ShelvesActions from '../actions/shelve';

export interface ShelvesState {
  shelves: [];
};

export const initialState: ShelvesState = {
  shelves: []
};

const scoreboardReducer = createReducer(
  initialState,
  on(ShelvesActions.create, (state, { shelve }) => ({ ...state, shelves: [...state.shelves, shelve] })),
  on(ShelvesActions.remove, (state, { shelveId }) => ({ ...state, shelves: removeShelve(state, shelveId) })),
  on(ShelvesActions.update, (state, { newShelve }) => ({ ...state, shelves: updateShelve(state, newShelve) }))
);

export function reducer(state: ShelvesState | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}
