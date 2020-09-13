import { Component, OnInit, Input } from '@angular/core';

import { IBook } from '../../../models/book';

import {BooksService} from '../../services/books.service';
import {ISearchResponse} from '../../../models/searchResponse';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  @Input('shelveId') shelveId: string;

  bookName: string;
  searchTimeout;
  books: object[];

  constructor(
    private booksServices: BooksService
  ) { }

  ngOnInit(): void {
  }

  public search(): void {
    if (this.bookName.trim()) {
      clearTimeout(this.searchTimeout);

      this.searchTimeout = setTimeout(() => {
        this._getBooks(this.bookName);
      }, 300);

    } else {
      clearTimeout(this.searchTimeout);
      this.books = [];
    }
  }

  public _getBooks(bookName): void {
    const res: ISearchResponse = this.booksServices.search(bookName);
    if (!res.error) {
      this.books = res.books;
    }
  }

  public add(bookIsbn: string): void {
    this.booksServices.add(this.shelveId, bookIsbn);
  }
}
