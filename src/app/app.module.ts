import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriaService } from './services/categorias.service';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosService } from './services/productos.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

//Rutas

import { AppRoutingModule } from './app.routes';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // CategoriasComponent,
    // ProductosComponent,
    // HomeComponent,
    ComponentsModule

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    CategoriaService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
