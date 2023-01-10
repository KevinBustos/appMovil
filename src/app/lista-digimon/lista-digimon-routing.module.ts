import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDigimonPage } from './lista-digimon.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDigimonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDigimonPageRoutingModule {}
