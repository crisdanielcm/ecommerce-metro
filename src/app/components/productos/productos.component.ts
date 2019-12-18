import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  seleciconados: any = [];
  titulo: string;
  navigationSubscription;

  constructor(private _productosService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this._productosService.getProductos().subscribe(data => {
      this.productos = data;
      this.productos.products.forEach((p: any) => {
        if (p.sublevel_id == this.route.snapshot.params.id) {
          p.name = this.convertirMayuscula(p.name);
          this.seleciconados.push(p);
          if (this.route.snapshot.params.subsubcategoria != null) {
            this.titulo = `${this.route.snapshot.params.categoria} - ${this.route.snapshot.params.subcategoria} - ${this.route.snapshot.params.subsubcategoria}`;
          } else {
            this.titulo = `${this.route.snapshot.params.categoria} - ${this.route.snapshot.params.subcategoria}`;
          }

          if (p.available) {
            p.available = 'Si';
          } else {
            p.available = 'No';
          }
        }
      });
    });
  }

  convertirMayuscula(nombre: string) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }

}
