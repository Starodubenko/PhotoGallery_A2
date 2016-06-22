import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'gallery'
})
@View({
    templateUrl: './components/gallery/gallery.html',
    directives: [RouterLink]
})
export class Gallery {}
