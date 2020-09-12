import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShelveComponent } from './pages/shelve/shelve.component';
import { ShelveFormComponent } from './components/shelve-form/shelve-form.component';
import { ShelvesListComponent } from './components/shelves-list/shelves-list.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShelveComponent,
    ShelveFormComponent,
    ShelvesListComponent,
    BooksListComponent,
    BooksSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
