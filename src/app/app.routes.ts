import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: ':categoria/:subcategoria/:id', component: ProductosComponent, runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
    { path: ':categoria/:subcategoria/:subsubcategoria/:id', component: ProductosComponent, runGuardsAndResolvers: 'always' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}

