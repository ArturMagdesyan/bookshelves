import { Component, OnInit, Input } from '@angular/core';

import { BooksService } from '../../services/books.service';
import {IBook} from '../../../models/book';
import { existsBook } from '../../helpers/checkBookExistsInShelf';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit {
  @Input('shelveId') shelveId: string;
  @Input('books') shelveBooks: IBook[];

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
        this.booksServices.search(this.bookName).subscribe(res => {
          const response = JSON.parse(JSON.stringify(res));
          this.books = response.books;
        });
      }, 300);

    } else {
      clearTimeout(this.searchTimeout);
      this.books = [];
    }
  }

  public add(book, index): void {
    const isExistsBook = existsBook(this.shelveBooks, book);
    if (isExistsBook) {
      alert('This book exists in the shelf');

      return;
    }
    this.booksServices.add(this.shelveId, book.isbn13);
    this.books.splice(index, 1);
  }
}
