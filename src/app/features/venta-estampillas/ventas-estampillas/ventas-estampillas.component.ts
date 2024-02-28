import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/core/venta.service';


@Component({
  selector: 'app-ventas-estampillas',
  templateUrl: './ventas-estampillas.component.html',
  styleUrls: ['./ventas-estampillas.component.css']
})
export class VentasEstampillasComponent implements OnInit {
  ventas: any[] = [];

  constructor(private ventaService: VentaService) {}

  ngOnInit() {
    this.ventaService.obtenerVentas().subscribe((data) => {
      this.ventas = data;
    });
  }
}
