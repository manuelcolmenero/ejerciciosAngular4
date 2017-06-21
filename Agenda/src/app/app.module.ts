// import propio Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'; 
import { AppRoutingModule } from "app/app-routing/app-routing.module";

// import propio y de terceros
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from "app/contactos.service";
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { OrdenContactosPipe } from './orden-contactos.pipe';

@NgModule({
  // En 'declarations' se indican los componentes, pipes y directivas de la aplicación
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    OrdenContactosPipe
  ],
  // En 'imports' se indican módulos de los cuáles se depende
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // En 'providers' se indican los proveedores de todas aquellas piezas que sean susceptibles de ser inyectables en la app
  providers: [
    ContactosService
  ],
  // En 'bootstrap' se indica el componente raíz, que es el primero que se instanciará y hará lo propio con el resto
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
