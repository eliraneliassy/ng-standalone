import { Component, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'standalone-component-demo',
  template: `
    <standalone-component></standalone-component>
  `,
})
export class AppComponent {
  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement
      .querySelector('#boostrappedStandaloneComponentPlaceholder')
      .appendChild(document.createElement('bootstrapped-standalone-component'));
  }
}
