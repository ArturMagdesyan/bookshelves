import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShelveRoutingModule } from './shelve.router';

import { ShelveComponent } from './shelve.component';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BooksSearchComponent } from '../../components/books-search/books-search.component';


@NgModule({
  declarations: [
    ShelveComponent,
    BookFormComponent,
    BooksListComponent,
    BooksSearchComponent
  ],
  imports: [
    CommonModule,
    ShelveRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShelveModule { }
