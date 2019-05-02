import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FilmsService} from '../films/films.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

    film;
    rows = [
        {row: [{key: 'row 1'}, {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}]},
        {row: [{key: 'row 2'}, {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}]},
        {row: [{key: 'row 3'}, {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}]},
        {row: [{key: 'row 4'}, {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}]},
        {row: [{key: 'row 5'}, {key: 1}, {key: 2}, {key: 3}, {key: 4}, {key: 5}, {key: 6}, {key: 7}, {key: 8}]},
    ];

    constructor(private route: ActivatedRoute,
                private filmService: FilmsService,
                private location: Location) {
    }

    ngOnInit() {
        this.getFilm();
    }

    getFilm(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.filmService.getFilm(id)
            .subscribe(hero => this.film = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
