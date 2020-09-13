import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { create, remove } from '../../store/actions/book';
import { ShelvesState } from '../../store/reducers/shelves';

import { IBook } from '../../models/book';

import { regulateBookModel } from '../helpers/regulateModels';
import {Observable} from 'rxjs';

const API = 'https://api.itbook.store/1.0';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient,
    private store: Store<{ shelves: ShelvesState }>
  ) { }

  public create(shelveId: string, book: IBook): void {
    Object.assign(book, {id: uuidv4()});
    this.store.dispatch(create({shelveId, book}));
  }

  public delete(shelveId: string, bookId: string): void {
    this.store.dispatch(remove({shelveId, bookId}));
  }

  public search(bookName): Observable<object> {
    const url = API + `/search/${bookName}`;
    return this.http.get<object>(`https://cors-anywhere.herokuapp.com/${url}`);
  }

  public add(shelveId, isbn: string): void {
    const url = API + `/books/${isbn}`;
    this.http.get(`https://cors-anywhere.herokuapp.com/${url}`).subscribe(res => {
      const response = JSON.parse(JSON.stringify(res));
      const book: IBook = Object.assign(regulateBookModel(response), { id: uuidv4()});
      this.store.dispatch(create({shelveId, book}));
    });
  }
}
