import {} from 'angular2/angular2';
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Login} from './components/login/login';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Admin} from './components/admin/admin';
import {Gallery} from './components/gallery/gallery';
import {Error} from './components/error/error';
import {NamesList} from './services/NameList';

@Component({
    selector: 'app',
    viewBindings: [NamesList]
})
@RouteConfig([
    {path: '/', as: 'home', component: Home, useAsDefault: true},
    {path: '/login', as: 'login', component: Login},
    {path: '/gallery', as: 'gallery', component: Gallery},
    {path: '/admin', as: 'admin', component: Admin},
    {path: '/error', as: 'error', component: Error},
])
@View({
    templateUrl: './app.html',
    directives: [RouterOutlet, RouterLink]
})
class App {
}


bootstrap(App, [routerInjectables]);
