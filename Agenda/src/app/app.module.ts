import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from "app/contactos.service";

@NgModule({
  // En declarations se indican los componentes, pipes y 
  // directivas de la aplicación
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  // En imports se indican módulos de los cuáles se depende
  imports: [
    BrowserModule
  ],
  // En providers se indican los proveedores de todas aquellas
  // piezas que sean susceptibles de ser inyectables en la app
  providers: [
    ContactosService
  ],
  // En bootstrap se indica el componente raíz, que es el primero
  // que se instanciará y hará lo propio con el resto
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
