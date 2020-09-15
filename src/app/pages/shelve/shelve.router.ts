import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelveComponent } from './shelve.component';

const routes: Routes = [
  { path: '', component: ShelveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShelveRoutingModule {}
