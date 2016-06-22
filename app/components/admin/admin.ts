import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {ExhibitionWall} from '../exhibitionWall/exhibitionWall';

@Component({
    selector: 'admin'
})
// @RouteConfig([
//     {path: '/', component: ExhibitionWall, as: 'exhibitionWall', index: true},
//     {path: '/admin/exhibition-wall', component: ExhibitionWall, as: 'exhibitionWall'}
// ])
@View({
    templateUrl: './components/admin/admin.html',
    directives: [RouterOutlet, RouterLink]
})
export class Admin {}

// bootstrap(Admin, [routerInjectables]);
