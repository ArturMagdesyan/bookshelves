import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shelve/:id', loadChildren: () => import('./pages/shelve/shelve.module').then(m => m.ShelveModule) },

  { path: '**', component: NotFoundComponent },
];
