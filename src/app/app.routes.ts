import {Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {PageNotFoundComponent} from "./routes/page-not-found/page-not-found.component";


export const routes: Routes = [
  {
    path: 'home',
    title: "Home",
    component: HomeComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent
  }
];
