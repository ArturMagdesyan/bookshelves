import { Component, OnInit, Input } from '@angular/core';

import Swal from 'sweetalert2';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../../models/book';
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
  books = [];
  displayedColumns = ['image', 'title', 'action'];
  loader = false;

  constructor(
    private booksServices: BooksService
  ) { }

  ngOnInit(): void {
  }

  public search(): void {
    if (this.bookName.trim()) {
      clearTimeout(this.searchTimeout);
      this.loader = true;
      this.searchTimeout = setTimeout(() => {
        this.booksServices.search(this.bookName).subscribe(res => {
          const response = JSON.parse(JSON.stringify(res));
          this.books = response.books;
          this.loader = false;
        });
      }, 300);
    } else {
      clearTimeout(this.searchTimeout);
      this.books = [];
      this.loader = false;
    }
  }

  public add(book): void {
    const isExistsBook = existsBook(this.shelveBooks, book);
    if (isExistsBook) {
      Swal.fire({
        icon: 'error',
        text: 'This book exists in the shelf!',
      });
      return;
    }
    this.booksServices.add(this.shelveId, book.isbn13);
    this.books = this.books.filter(bookItem => {
      return bookItem.isbn13 !== book.isbn13;
    });
    Swal.fire({
      icon: 'success',
      text: `Book ${book.title} successfully added!`,
    });
  }
}
