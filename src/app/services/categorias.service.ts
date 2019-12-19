import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {

    constructor(private http: HttpClient) {
        console.log('Servicio listo para usar');
    }

    getCategorias() {
       return this.http.get('../../assets/data/categorias.json');
    }
}
