import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { reducers, metaReducers } from './helpers/storeLocalStorige';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShelveFormComponent } from './components/shelve-form/shelve-form.component';
import { ShelvesListComponent } from './components/shelves-list/shelves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShelveFormComponent,
    ShelvesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
