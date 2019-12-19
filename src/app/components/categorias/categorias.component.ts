import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from '../../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  // tslint:disable-next-line: variable-name
  constructor( private _categoriaService: CategoriaService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
      this._categoriaService.getCategorias()
      .subscribe(data => {
        this.categorias = data;
    });
  }
}
