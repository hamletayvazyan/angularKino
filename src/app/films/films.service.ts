import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

import {Film} from './film';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {

    constructor(private http: HttpClient) {
    }

    url = '../../assets/films.json';

    getFilms() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError)
        );
    }

    getFilm(id: number | string) {
        return this.getFilms().pipe(
            map((film: Film[]) => film.find(f => f.id === +id))
        );
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}