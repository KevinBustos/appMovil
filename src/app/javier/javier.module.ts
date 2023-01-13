import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JavierPageRoutingModule } from './javier-routing.module';

import { JavierPage } from './javier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JavierPageRoutingModule
  ],
  declarations: [JavierPage]
})
export class JavierPageModule {}
