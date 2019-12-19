import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

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
  id: string;

  constructor(private _productosService: ProductosService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.seleciconados = [];
      this.productos = [];
      console.log(this.seleciconados);
      this._productosService.getProductos().subscribe(data => {
        this.productos = data;
        this.productos.products.forEach((p: any) => {
          if (p.sublevel_id == this.id) {
            p.name = this.convertirMayuscula(p.name);
            this.seleciconados.push(p);
            if (this.route.snapshot.params.subsubcategoria == null) {
              this.titulo = `${this.route.snapshot.params.subcategoria}`;
            } else {
              this.titulo = `${this.route.snapshot.params.subsubcategoria}`;
            }

            if (p.available) {
              p.available = 'Si';
            } else {
              p.available = 'No';
            }
          }
        });
      });
    });
  }

  convertirMayuscula(nombre: string) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }

  ordenarProductos(criterio: string) {

    switch (criterio) {
      case '1':
        this.ordenarPorPrecio(criterio);
        break;

      case '2':
        this.ordenarPorPrecio(criterio);
        break;

      case '3':
        this.ordenarPorCantidad(criterio);
        break;

      case '4':
          this.ordenarPorCantidad(criterio);
          break;

      case '5':
        this.ordenarPorDisponibilidad();
        break;
    }
  }

  ordenarPorPrecio(criterio: string) {

    if (criterio === '1') {
      return this.seleciconados.sort( (a, b) => this.funcionDeComparacion(this.reemplazarCaracteresPrecio(b.price), this.reemplazarCaracteresPrecio(a.price)));
    } else if (criterio === '2') {
      return this.seleciconados.sort( (a, b) => this.funcionDeComparacion(this.reemplazarCaracteresPrecio(a.price), this.reemplazarCaracteresPrecio(b.price)));
    }
  }

  ordenarPorDisponibilidad() {
    return this.seleciconados.sort((a, b) => b.available.localeCompare(a.available));
  }

  ordenarPorCantidad(criterio: string) {
    if (criterio === '3') {
      return this.seleciconados.sort( (a, b) => this.funcionDeComparacion((b.quantity), (a.quantity)));
    } else if (criterio === '4') {
      return this.seleciconados.sort( (a, b) => this.funcionDeComparacion((a.quantity), (b.quantity)));
    }
  }

  funcionDeComparacion(elem1: number, elem2: number) { return elem1 - elem2; }

  reemplazarCaracteresPrecio(precio: string) {
    // tslint:disable-next-line: radix
    return parseInt(precio.replace('$', '').replace(',', ''));
  }

}
