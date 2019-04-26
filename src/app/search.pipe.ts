import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(films, value) {
    return films.filter(film => {
      return film.name.includes(value);
    });
  }

}
