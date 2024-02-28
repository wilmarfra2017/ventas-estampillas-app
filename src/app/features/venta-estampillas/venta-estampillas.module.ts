import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaEstampillasRoutingModule } from './venta-estampillas-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VentasEstampillasComponent} from './ventas-estampillas/ventas-estampillas.component';


@NgModule({
  declarations: [
    FormularioComponent,
    VentasEstampillasComponent
  ],
  imports: [
    CommonModule,
    VentaEstampillasRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    VentasEstampillasComponent
  ]
})
export class VentaEstampillasModule { }
