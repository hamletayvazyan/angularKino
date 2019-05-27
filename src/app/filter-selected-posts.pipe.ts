import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterSelectedPosts'
})
export class FilterSelectedPostsPipe implements PipeTransform {

    transform(value: any, selectedPosts: any): any {
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < selectedPosts.length; j++) {
                if (value[i].id == selectedPosts[j].id) {
                    value[i].disabled = true;
                }
            }
        }
        console.log(value);
        return value;
    }

}
