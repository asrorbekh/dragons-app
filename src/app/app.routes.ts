import {Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {PageNotFoundComponent} from "./routes/page-not-found/page-not-found.component";
import {FaqComponent} from "./routes/faq/faq.component";
import {AboutComponent} from "./routes/about/about.component";
import {DragonsComponent} from "./routes/dragons/dragons.component";
import {DragonsTreasuresComponent} from "./routes/dragons-treasures/dragons-treasures.component";


export const routes: Routes = [
  {
    path: 'home',
    title: "Home",
    component: HomeComponent
  },
  {
    path: 'faq',
    title: "Faq",
    component: FaqComponent
  },
  {
    path: 'about',
    title: "About",
    component: AboutComponent
  },
  {path: 'dragons', title: 'Dragons', component: DragonsComponent},
  {
    path: 'dragons', children: [
      {path: 'treasures', title: 'Dragons | Treasures', component: DragonsTreasuresComponent},
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent
  }
];
