import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    ProductosComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    ProductosComponent,
    HomeComponent
  ]
})
export class ComponentsModule {}
