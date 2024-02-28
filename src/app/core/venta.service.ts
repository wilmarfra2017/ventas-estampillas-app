import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrlPost = 'http://localhost:5290/api/ventas-estampillas';
  private apiUrlGet = 'http://localhost:5290/api/estampillas';
  private apiUrlVentasGet = 'http://localhost:5290/api/ventas-estampillas';

  constructor(private http: HttpClient) {}

  crearVenta(data: any): Observable<any> {
    return this.http.post(this.apiUrlPost, data);
  }

  obtenerEstampillas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlGet);
  }

  obtenerVentas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlVentasGet);
  }

}
