import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

import { create, remove, update } from '../../store/actions/shelve';
import {ShelvesState, ShelveState} from '../../store/reducers/shelves';
import { INewShelve, IShelve } from '../../models/shelve';
import { getShelves, getShelve } from '../../store/selector';


@Injectable({
  providedIn: 'root'
})
export class ShelvesService {
  private shelve: IShelve;
   constructor(
     private store: Store<{ shelves: ShelvesState }>
   ) { }

  public getAll(): Observable<IShelve[]> {
    return this.store.pipe(select(getShelves));
  }

  public getOne(id: string): Observable<IShelve> {
    return this.store.pipe(select(getShelve, {id}));
  }

  public create(name: string): void {
     this.shelve = { id: uuidv4(), name, books: []};
     this.store.dispatch(create({ shelve: this.shelve }));
  }

  public delete(id: string): void {
    this.store.dispatch(remove({ shelveId : id }));
  }

  public update(newShelve: INewShelve): void {
     this.store.dispatch(update({ newShelve }));
  }

}
