import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';



@NgModule({
  declarations: [
    MenuComponent,
    EncabezadoComponent
  ],
  exports:[
    MenuComponent,
    EncabezadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
