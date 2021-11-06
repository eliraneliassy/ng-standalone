import { LocaleModule, locale } from './locale.module';
import { AnotherStandaloneComponent } from './another-standalone.component';
import { Component } from "../standaloneShim";
import { FormsModule } from '@angular/forms';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'standalone-component',
    standalone: true,
    imports: [FormsModule, AnotherStandaloneComponent, LocaleModule, CommonModule],
    template: `
        Counter is {{counter}}
        <button (click)="plus()">PLUS</button>
        
        <br>

        <input [(ngModel)]="name"> {{name}}

        <br>

        <another-standalone-component></another-standalone-component>

        <br>

        Supported locales:
        <ul>
            <li *ngFor="let locale of locales">{{ locale }}</li>
        </ul>

    `
})
export class MyStandaloneComponent {

    constructor(@Inject(locale) protected locales) {}

    name = 'Eliran'
    counter = 0;

    plus() {
        this.counter++;
    }
}