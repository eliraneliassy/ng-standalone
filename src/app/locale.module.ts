import { NgModule, InjectionToken } from "@angular/core";

export const locale = new InjectionToken<string[]>('locacle');

@NgModule({
    providers: [
        { provide: locale, useValue: 'en', multi: true },
        { provide: locale, useValue: 'us', multi: true },
    ]
})
export class LocaleModule { }