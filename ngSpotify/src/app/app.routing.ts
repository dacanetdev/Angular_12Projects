import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

export const routes: Route[] = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
