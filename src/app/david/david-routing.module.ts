import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavidPage } from './david.page';

const routes: Routes = [
  {
    path: '',
    component: DavidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DavidPageRoutingModule {}
