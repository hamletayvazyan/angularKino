import {Component} from '@angular/core';
import {FilmsService} from './films/films.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Topchik Cinema';
    search = false;
    films;
    searchKey = [];
    notFound = 'film not found';

    constructor(private filmService: FilmsService) {

    }

    searchFilm(val) {
        if (val.searchKey.length) {
            this.search = true;
        } else {
            this.search = false;
        }
        this.filmService.getFilms().subscribe(
            d => {
                this.films = d;
            },
            e => console.log(e)
        );
    }

}
