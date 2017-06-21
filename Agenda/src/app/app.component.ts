import { Component, OnInit } from '@angular/core';

@Component({
  // En 'selector' se indica el elemento HTML donde se instanciará 
  // dicho componente
  selector: 'app-root',
  // En 'templateUrls' se indica la ruta al template del componente.
  // Se puede escribir inline en la propiedad 'template'
  // ejemplo: 
  // template: "<h1>Hola mundo</h1>",
  templateUrl: './app.component.html',
  // En 'stylesUrls' se indican las rutas de los documentos CSS que
  // contienen los estilos que afectan a este componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
