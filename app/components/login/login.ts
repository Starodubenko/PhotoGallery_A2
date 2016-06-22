import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'login'
})
@View({
    templateUrl: './components/login/login.html',
    directives: [RouterLink]
})
export class Login {}
