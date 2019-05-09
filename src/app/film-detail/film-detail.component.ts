import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FilmsService} from '../films/films.service';
import {ActivatedRoute} from '@angular/router';
import {HallService} from './hall.service';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

    film;
    selected = [];
    hall;

    constructor(private route: ActivatedRoute,
                private filmService: FilmsService,
                private hallService: HallService,
                private location: Location) {
        this.getFilm();
    }

    ngOnInit() {
        this.getHalls();
    }

    getHalls() {
        this.hallService.getHalls()
            .subscribe(d => {
                this.hall = d;
            }, e => console.log(e));
    }

    getFilm(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.filmService.getFilm(id)
            .subscribe(
                film => {
                    this.film = film;
                    this.checkLocalStorage(this.film);
                },
                e => console.log(e)
            );
    }

    goBack(): void {
        this.location.back();
    }

    pickPosition(i) {
        if (this.selected) {
            this.selected.push({id: i});
            localStorage.setItem(this.film.id, JSON.stringify(this.selected));
        } else {
            this.selected.push({id: i});
            localStorage.setItem(this.film.id, JSON.stringify(this.selected));
        }
    }

    checkLocalStorage(film) {
        if (localStorage.getItem(film.id)) {
            let jsonData = JSON.parse(localStorage.getItem(film.id));
            for (let i = 0; i < jsonData.length; i++) {
                this.selected.push(jsonData[i]);
            }
            console.log(this.selected);
        } else {
            console.log('empty');
        }
    }
}
