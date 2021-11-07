import { ViewContainerRefShim } from './../standaloneShim';
import { Component, ViewContainerRef, Inject, ComponentFactoryResolver } from '@angular/core';
import { MyStandaloneComponent } from './standalone.component';

@Component({
  selector: 'standalone-component-demo',
  template: `
    <standalone-component></standalone-component>
    
    <hr>

    <div myStandaloneDirective> I'm using the standalone directive</div>

    <hr>

    <div> {{'Im using the standalone pipe' | standalonePipe}} </div>

    <hr>

    <button (click)="loadCmp()">Load Component Dynamiclly</button>
  `,
})
export class AppComponent {

  vcrShim: ViewContainerRefShim;

  constructor(
    @Inject(ViewContainerRef) private vcr: ViewContainerRef,
    @Inject(ComponentFactoryResolver) private cfResolver: ComponentFactoryResolver
  ) {
    this.vcrShim = new ViewContainerRefShim(vcr, cfResolver);
  }

  loadCmp() {
    this.vcrShim.createComponent(MyStandaloneComponent);
  }

}
