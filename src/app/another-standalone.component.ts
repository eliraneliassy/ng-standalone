import { Component } from "../standaloneShim";

@Component({
    selector: 'another-standalone-component',
    standalone: true,
    template: `
        I'm another standalone component!         
    `
})
export class AnotherStandaloneComponent {

    
}