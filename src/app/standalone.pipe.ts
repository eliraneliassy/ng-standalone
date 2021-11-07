import { Pipe } from "../standaloneShim";
import { PipeTransform } from '@angular/core';

@Pipe({
    name: 'standalonePipe',
    standalone: true
})
export class MyStandAlonePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value.toLocaleUpperCase();
    }

}