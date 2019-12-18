import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {

    constructor(private http: HttpClient) {
        console.log('Servicio listo para usar');
    }

    getProductos() {
        return this.http.get('../../assets/data/productos.json');
    }
}
