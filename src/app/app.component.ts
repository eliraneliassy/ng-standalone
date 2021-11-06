import { MyStandAlonePipe } from './standalone.pipe';
import { Component, ElementRef, Inject, ViewContainerRef, ComponentFactoryResolver, inject } from '@angular/core';
import { ViewContainerRefShim, bootstrapComponent } from '../standaloneShim';
import { MyStandaloneComponent } from './standalone-component.component';

@Component({
  selector: 'standalone-component-demo',
  template: `
    <!-- <standalone-component></standalone-component> -->

    <div standalone-directive>I'm using the standalone directive</div>

    <div>{{'Im using the standalone pipe' | standalonePipe}}</div>

    <button (click)="loadCmp()">Load cmp dynamiclly</button>


  `,
})
export class AppComponent {
  vcRef: ViewContainerRefShim;
  constructor(
    @Inject(ViewContainerRef) vcRef: ViewContainerRef,
    @Inject(ComponentFactoryResolver) cfResolver: ComponentFactoryResolver,
    ) {
    this.vcRef = new ViewContainerRefShim(vcRef, cfResolver);
  }

  ngOnInit() {


  }

  loadCmp() {
    import('./standalone-component.component').then((m) =>
      this.vcRef.createComponent(m.MyStandaloneComponent)
    );
    
    
  }
}
