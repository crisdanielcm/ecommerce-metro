import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosComponent } from './productos.component';
import { ProductosService } from '../../services/productos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../../app.routes';
import { HomeComponent } from '../home/home.component';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;
  let productos;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosComponent, HomeComponent ],
      imports: [HttpClientModule, AppRoutingModule],
      providers: [ProductosService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productos = [
      {
        quantity: 308,
        price: '$8,958',
        available: false,
        sublevel_id: 3,
        name: 'aute',
        id: '58b5a5b1b6b6c7aacc25b3fb'
      },
      {
        quantity: 891,
        price: '$5,450',
        available: true,
        sublevel_id: 3,
        name: 'mollit',
        id: '58b5a5b117bf36cf8aed54ab'
      },
      {
        quantity: 698,
        price: '$17,001',
        available: false,
        sublevel_id: 10,
        name: 'eiusmod',
        id: '58b5a5b18607b1071fb5ab5b'
      },
      {
        quantity: 449,
        price: '$6,864',
        available: true,
        sublevel_id: 7,
        name: 'proident',
        id: '58b5a5b13881e97291384813'
      }
    ];
  });

  it('Debe convertir la primera letra del nombre de los productos en mayuscula', () => {
    productos[0].name = component.convertirMayuscula(productos[0].name);
    expect(productos[0].name).toEqual('Aute');
  });
});
