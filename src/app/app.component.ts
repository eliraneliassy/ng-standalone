import { Component, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'standalone-component-demo',
  template: `
    
  `,
})
export class AppComponent {
  constructor(@Inject(ElementRef) private elementRef: ElementRef) {}

  ngOnInit() {
    // TODO: is this is easiest way to get Angular to ignore the element to be
    // bootstrapped? ngNonBindable seemed to work at first, but not it doesn't
    // so I ended up doing this... :-|
    this.elementRef.nativeElement
      .querySelector('#boostrappedStandaloneComponentPlaceholder')
      .appendChild(document.createElement('bootstrapped-standalone-component'));
  }
}
