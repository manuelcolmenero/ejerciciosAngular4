import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisContactosComponent } from "../mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "../nuevo-contacto/nuevo-contacto.component";

// Se definen las rutas de la aplicación. Cada una de ellas tiene que tener una propiedad 'path', que es donde se indica la ruta a navegar, y otra propiedad 'component', que es el componente que responde de la ruta
const routes: Routes = [
  {
    path: 'mis-contactos',
    component: MisContactosComponent
  },
  {
    path: 'nuevo-contacto',
    component: NuevoContactoComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/mis-contactos'
  }
];

// Con 'RouterModule.forRoot'
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
