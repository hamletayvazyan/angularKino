import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {FilmsService} from '../films/films.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-film-genre',
    templateUrl: './film-genre.component.html',
    styleUrls: ['./film-genre.component.css']
})
export class FilmGenreComponent implements OnInit {
    selectedGenre = [];

    constructor(private route: ActivatedRoute, private router: Router,
                private filmService: FilmsService,
                private location: Location) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const genre = route.snapshot.paramMap.get('genre');
                this.selectedGenre = [];
                this.getFilmGenre(genre);
            }
        });
    }

    ngOnInit() {
    }

    getFilmGenre(genre) {
        this.filmService.getFilms()
            .subscribe(g => {
                    this.checkGenre(genre, g);
                }
            );
    }

    goBack(): void {
        this.location.back();
    }

    checkGenre = (selected, films): void => {
        for (let f of films) {
            if (f.genre == selected) {
                this.selectedGenre.push(f);
            }
        }
    }
}
