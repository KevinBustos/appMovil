import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NicolasPage } from './nicolas.page';

const routes: Routes = [
  {
    path: '',
    component: NicolasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NicolasPageRoutingModule {}
