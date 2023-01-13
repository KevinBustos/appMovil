import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NicolasPageRoutingModule } from './nicolas-routing.module';

import { NicolasPage } from './nicolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NicolasPageRoutingModule
  ],
  declarations: [NicolasPage]
})
export class NicolasPageModule {}
