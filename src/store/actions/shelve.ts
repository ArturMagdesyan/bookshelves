import { createAction, props } from '@ngrx/store';

import { INewShelve, IShelve } from '../../models/shelve';

export const create = createAction(
  '[Create shelves] store add shelve',
  props<{ shelve: IShelve }>()
);

export const remove = createAction(
  '[Delete shelve] store delete shelve',
  props<{ shelveId: string }>()
);

export const update = createAction(
  '[Update shelve] store update shelve',
  props<{ newShelve: INewShelve }>()
);
