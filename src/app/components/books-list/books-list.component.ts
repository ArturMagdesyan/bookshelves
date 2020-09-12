import {Component, Input, OnInit} from '@angular/core';

import { IBook } from '../../../models/book';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input('books') books: IBook[];
  @Input('shelveId') shelveId: string;
  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
  }

  public delete(book: IBook): void {
    confirm(`You really want to delete the book: ${book.title}`) &&
    this.booksService.delete(this.shelveId, book.id);
  }
}
