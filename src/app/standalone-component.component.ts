import { Component } from "../standaloneShim";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'standalone-component',
    standalone: true,
    imports: [FormsModule],
    template: `
        Counter is {{counter}}
        <button (click)="plus()">PLUS</button>

        <input [(ngModel)]="name"> {{name}}
    `
})
export class MyStandaloneComponent {

    name = 'Eliran'
    counter = 0;

    plus() {
        this.counter++;
    }
}