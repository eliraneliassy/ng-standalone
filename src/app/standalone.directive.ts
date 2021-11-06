import { Directive } from "../standaloneShim";

@Directive({
    standalone: true,
    selector: '[standalone-directive]',
    host: {
        style: `border: 4px solid red`
    }
})
export class MyStandaloneDirective {

}