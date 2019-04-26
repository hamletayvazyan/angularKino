import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(array: any, field: string): any[] {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return array;
    }
}
