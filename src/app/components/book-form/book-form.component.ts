import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { BooksService } from '../../services/books.service';

import { IBook } from '../../../models/book';
import { existsBook } from '../../helpers/checkBookExistsInShelf';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input('shelveId') shelveId: string;
  @Input('books') shelveBooks: IBook[];

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/\S/)]],
      authorName: ['', [Validators.required, Validators.pattern(/\S/)]],
      image: ['', [Validators.required, Validators.pattern(/\S/)]],
      isbn: ['', [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  get controls(): any {
    return this.registerForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const isExistsBook = existsBook(this.shelveBooks, this.registerForm.value);
    if (isExistsBook) {
      Swal.fire({
        icon: 'error',
        text: 'This book exists in the shelf!',
      });
      this.onReset();

      return;
    }
    this.booksService.create(this.shelveId, this.registerForm.value);
    this.onReset();
    Swal.fire({
      icon: 'success',
      text: 'Book successfully created!',
    });
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
