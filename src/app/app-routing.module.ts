import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {FilmGenreComponent} from './film-genre/film-genre.component';

const routes: Routes = [
    {path: 'films', component: FilmsComponent},
    {path: 'film/:id', component: FilmDetailComponent},
    {path: 'genre/:genre', component: FilmGenreComponent},
    { path: '',   redirectTo: '/films', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true }
        )],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
