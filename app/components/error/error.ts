import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'error'
})
@View({
    templateUrl: './components/error/error.html',
    directives: [RouterLink]
})
export class Error {}
