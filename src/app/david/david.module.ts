import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavidPageRoutingModule } from './david-routing.module';

import { DavidPage } from './david.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavidPageRoutingModule
  ],
  declarations: [DavidPage]
})
export class DavidPageModule {}
