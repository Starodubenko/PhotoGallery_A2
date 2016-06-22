import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'exhibitionWall'
})
@View({
    templateUrl: './exhibitionWall.html',
    directives: [RouterLink]
})
export class ExhibitionWall {}
