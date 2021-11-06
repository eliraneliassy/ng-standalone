import { MyStandAlonePipe } from './standalone.pipe';
import { MyStandaloneDirective } from './standalone.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyStandaloneComponent } from './standalone-component.component';
import { AnotherStandaloneComponent } from './another-standalone.component';
import { locale } from './locale.module';

@NgModule({
  imports: [
    BrowserModule,
    MyStandaloneComponent['module'],
    AnotherStandaloneComponent['module'],
    MyStandaloneDirective['module'],
    MyStandAlonePipe['module'],
  ],
  providers: [
    { provide: locale, multi: true, useValue: 'fr' }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
