import { CommonModule } from '@angular/common';
import { LocaleModule, locale } from './locale.module';
import { AnohterStandaloneComponent } from './another.component';
import { FormsModule } from '@angular/forms';
import { Component } from "../standaloneShim";
import { inject, Inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'standalone-component',
    imports: [FormsModule, AnohterStandaloneComponent, LocaleModule, CommonModule],
    template: `
        Counter is {{counter}}

        <button (click)="plus()">PLUS</button>
        <br>
        <input [(ngModel)]="name"> Name is {{name}}

        <br>

        <another-standalone-component></another-standalone-component>

        <br>

        <ul>
            <li *ngFor="let locale of locales"> {{locale}} </li>
        </ul>
    `
})
export class MyStandaloneComponent {

    constructor(@Inject(locale) protected locales: string[]) { }
    counter = 0;
    name = 'Eliran';

    plus() {
        this.counter++;
    }
}