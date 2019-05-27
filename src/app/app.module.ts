import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilmGenreComponent } from './film-genre/film-genre.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { FilterSelectedPostsPipe } from './filter-selected-posts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmGenreComponent,
    PageNotFoundComponent,
    SortPipe,
    SearchPipe,
    FilterSelectedPostsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
