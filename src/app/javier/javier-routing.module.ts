import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavierPage } from './javier.page';

const routes: Routes = [
  {
    path: '',
    component: JavierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavierPageRoutingModule {}
