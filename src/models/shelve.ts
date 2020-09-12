import {IBook} from './book';

export interface IShelve {
  id?: string;
  name: string;
  books?: IBook[];
}

export interface INewShelve {
  id: string;
  name: string;
}
