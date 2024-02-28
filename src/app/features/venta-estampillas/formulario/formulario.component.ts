import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VentaService } from 'src/app/core/venta.service';
import { ChangeDetectorRef } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ventaForm!: FormGroup;
  ventas: any[] = [];

  constructor(
    private ventaService: VentaService,
    private cdRef: ChangeDetectorRef
  ) {}

  estampillas: any[] = [];

  ngOnInit() {
    const idVentaAutogenerado = uuidv4();

    this.ventaForm = new FormGroup({
      idVenta: new FormControl(idVentaAutogenerado, Validators.required),
      idEstampilla: new FormControl('', Validators.required),
      cantVendida: new FormControl('', Validators.required),
      precioUnitario: new FormControl('', Validators.required),
      idCliente: new FormControl('', Validators.required)
    });

    this.cargarEstampillas();
  }

  cargarEstampillas() {
    this.ventaService.obtenerEstampillas().subscribe(
      (data: any[]) => {
        this.estampillas = data;
        this.cdRef.detectChanges();
      },
      (error: any) => {
        alert('Error al cargar las estampillas: ' + error.message);
      }
    );
  }

  onSubmit() {
    if (this.ventaForm.valid) {
      this.ventaService.crearVenta(this.ventaForm.value).subscribe(
        (response: any) => {
          // Manejo exitoso
          alert('Venta creada con éxito!');
          this.ventas = [...this.ventas, response];
          this.cdRef.detectChanges();
          console.log("venta: ", response);
        },
        (error: any) => {
          // Manejo de errores
          if (error.error && error.error.ErrorMessage) {
            // Si hay un mensaje de error personalizado del backend, lo muestra.
            alert(`Error al crear la venta: ${error.error.ErrorMessage}`);
          } else if (error.status === 422 && error.error.errors) {
            // Manejo específico para errores de validación
            let errorMessage = 'Error al crear la venta: ';
            for (const key in error.error.errors) {
              if (error.error.errors[key]) {
                error.error.errors[key].forEach((message: string) => {
                  errorMessage += `${message} `;
                });
              }
            }
            alert(errorMessage);
          } else {
            // Para otros tipos de errores HTTP
            alert(`Error al crear la venta: Ha ocurrido un error inesperado. Estado del error: ${error.status}`);
          }
        }
      );
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }
}
