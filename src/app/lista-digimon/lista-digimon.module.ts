import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDigimonPageRoutingModule } from './lista-digimon-routing.module';

import { ListaDigimonPage } from './lista-digimon.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDigimonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaDigimonPage]
})
export class ListaDigimonPageModule {}
