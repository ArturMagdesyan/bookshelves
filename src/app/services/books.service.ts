import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { create, remove } from '../../store/actions/book';
import { ShelvesState } from '../../store/reducers/shelves';

import { IBook } from '../../models/book';
import {ISearchResponse} from '../../models/searchResponse';

import { searchBooksRequestData } from '../utils/searchBooksRequestData';
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

  public search(bookName): ISearchResponse {
    // this.http.get(API + `/search/${bookName}`, httpOptions).subscribe(res => {
    //   console.log(res);
    // });
    return searchBooksRequestData;
  }
}
