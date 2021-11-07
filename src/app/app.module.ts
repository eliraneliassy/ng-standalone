import { MyStanadaloneDirective } from './standalone.directive';
import { locale } from './locale.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyStandaloneComponent } from './standalone.component';
import { MyStandAlonePipe } from './standalone.pipe';

@NgModule({
  imports: [
    BrowserModule,
    MyStandaloneComponent['module'],
    MyStanadaloneDirective['module'],
    MyStandAlonePipe['module']
  ],
  providers: [
    {provide: locale, useValue: 'fr', multi: true}
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
