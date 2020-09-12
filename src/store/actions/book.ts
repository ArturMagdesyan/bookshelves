import { createAction, props } from '@ngrx/store';

import { IBook } from '../../models/book';

export const create = createAction(
  '[Create book] add book in shelve',
  props<{ shelveId: string, book: IBook }>()
);

export const remove = createAction(
  '[Delete book] delete book in shelve',
  props<{ shelveId: string, bookId: string }>()
);
