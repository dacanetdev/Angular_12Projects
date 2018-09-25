import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthorizedComponent } from './authorized/authorized.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

export const routes: Routes = [
  { path: '', component: AuthenticateComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'authenticate', component: AuthenticateComponent },
  { path: 'authorized', component: AuthorizedComponent }
];

export const routing = RouterModule.forRoot(routes);
