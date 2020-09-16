import {Component, Input, OnInit} from '@angular/core';

import { IBook } from '../../../models/book';
import {BooksService} from '../../services/books.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  @Input('books') books: IBook[];
  @Input('shelveId') shelveId: string;

  displayedColumns: string[] = ['image', 'title', 'authorName', 'isbn', 'action'];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
  }

  public delete(book: IBook): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `You really want to delete the book: ${book.title}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.booksService.delete(this.shelveId, book.id);
        Swal.fire({
          icon: 'success',
          text: `Book ${ book.title } successfully deleted!`,
        });
      }
    });
  }
}
