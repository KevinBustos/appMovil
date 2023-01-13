import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KevinPage } from './kevin.page';

const routes: Routes = [
  {
    path: '',
    component: KevinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KevinPageRoutingModule {}
