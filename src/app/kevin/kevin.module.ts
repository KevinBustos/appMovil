import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KevinPageRoutingModule } from './kevin-routing.module';

import { KevinPage } from './kevin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KevinPageRoutingModule
  ],
  declarations: [KevinPage]
})
export class KevinPageModule {}
