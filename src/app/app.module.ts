import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyStandaloneComponent } from './standalone-component.component';

@NgModule({
  imports: [
    BrowserModule,
    MyStandaloneComponent['module']
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
