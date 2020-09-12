import { createAction, props } from '@ngrx/store';

import { INewShelve, IShelve } from '../../models/shelve';

export const create = createAction(
  '[Create shelves] add shelve in store',
  props<{ shelve: IShelve }>()
);

export const remove = createAction(
  '[Delete shelve] delete shelve in store',
  props<{ shelveId: string }>()
);

export const update = createAction(
  '[Update shelve] update shelve in store',
  props<{ newShelve: INewShelve }>()
);
