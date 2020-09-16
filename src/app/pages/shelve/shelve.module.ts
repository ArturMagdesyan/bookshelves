import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// router
import { ShelveRoutingModule } from './shelve.router';
// components
import { ShelveComponent } from './shelve.component';
import { BookFormComponent } from '../../components/book-form/book-form.component';
import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BooksSearchComponent } from '../../components/books-search/books-search.component';
// material
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressBarModule,
  ]
})
export class ShelveModule { }
