import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './features/venta-estampillas/formulario/formulario.component';
import { VentasEstampillasComponent } from './features/venta-estampillas/ventas-estampillas/ventas-estampillas.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'ventas', component: VentasEstampillasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
