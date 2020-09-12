import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ShelvesState} from '../reducers/shelves';

export const getShelvesState = createFeatureSelector<ShelvesState>('shelves');

export const getShelves = createSelector(
  getShelvesState,
  (state: ShelvesState) => state.shelves
);

export const getShelve = createSelector(
  getShelvesState,
  (state: ShelvesState, props) => state.shelves.find(shelve => shelve.id === props.id)
);
