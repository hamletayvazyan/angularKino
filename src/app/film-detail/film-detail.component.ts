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
    localStorageItems;
    halls;

    constructor(private route: ActivatedRoute,
                private filmService: FilmsService,
                private hallService: HallService,
                private location: Location) {
    }

    ngOnInit() {
        this.getHalls();
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
    checkVal(i) {
        this.selected.push({id: i});
        if (this.localStorageItems) {
            console.log(this.localStorageItems);
            localStorage.setItem('checked', JSON.stringify(this.selected));
            this.localStorageItems = JSON.parse(localStorage.getItem('checked'));
        } else {
            localStorage.setItem('checked', JSON.stringify(this.selected));
            this.localStorageItems = JSON.parse(localStorage.getItem('checked'));
        }
    }
    checkLocalStorage(d) {
        console.log(d);
        if (d) {
            if (localStorage.getItem('checked')) {
                this.localStorageItems = JSON.parse(localStorage.getItem('checked'));
                console.log(this.localStorageItems);
            }
        }
    }
    getHalls() {
        this.hallService.getHalls()
            .subscribe(d => {
                this.halls = d;
                this.checkLocalStorage(d);
            }, e => console.log(e));
    }
}
