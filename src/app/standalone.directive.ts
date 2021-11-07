import {Directive} from './../standaloneShim';

@Directive({
    selector: '[myStandaloneDirective]',
    standalone: true,
    host: {
        style: `border: 3px solid red`
    }
    

})
export class MyStanadaloneDirective {

}