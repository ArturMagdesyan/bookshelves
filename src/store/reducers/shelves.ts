import { Action, createReducer, on} from '@ngrx/store';

import {
  removeShelve,
  updateShelve,
  createBook,
  removeBook,
} from '../helpers/reducer.helper';
import * as ShelvesActions from '../actions/shelve';
import * as BooksActions from '../actions/book';
import { IShelve } from '../../models/shelve';

export interface ShelvesState {
  shelves: IShelve[];
}

export interface ShelveState {
  shelve: IShelve;
}

export const initialState: ShelvesState = {
  shelves: []
};

const scoreboardReducer = createReducer(
  initialState,
  on(ShelvesActions.create, (state, { shelve }) => ({ ...state, shelves: [...state.shelves, shelve] })),
  on(ShelvesActions.remove, (state, { shelveId }) => ({ ...state, shelves: removeShelve(state, shelveId) })),
  on(ShelvesActions.update, (state, { newShelve }) => ({ ...state, shelves: updateShelve(state, newShelve) })),

  on(BooksActions.create, (state, { shelveId, book }) => ({ ...state, shelves: createBook(state, shelveId, book) })),
  on(BooksActions.remove, (state, { shelveId, bookId }) => ({ ...state, shelves: removeBook(state, shelveId, bookId) })),
);

export function reducer(state: ShelvesState | undefined, action: Action): any {
  return scoreboardReducer(state, action);
}
