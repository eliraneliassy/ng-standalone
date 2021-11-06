import { Component } from "../standaloneShim";

@Component({
    selector: 'standalone-component',
    standalone: true,
    template: `
        Counter is {{counter}}
        <button (click)="plus()">PLUS</button>
    `
})
export class MyStandaloneComponent {
    counter = 0;

    plus() {
        this.counter++;
    }
}