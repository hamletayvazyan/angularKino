import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FilmsService} from '../films/films.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film;
  constructor(private route: ActivatedRoute,
              private filmService: FilmsService,
              private location: Location) { }

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
