import { NgModule, InjectionToken } from "@angular/core";

export const locale = new InjectionToken<string[]>('locale');

@NgModule({
    providers: [
        { provide: locale, useValue: 'en', multi: true },
        { provide: locale, useValue: 'uk', multi: true }
    ]
})
export class LocaleModule { } 