import { Component, OnInit } from '@angular/core';
import { ContactosService } from "app/contactos.service";

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
export class AppComponent implements OnInit {

  // Atributo a nivel de instancia
  contactos: string[];

  // Para hacer una inyección de dependencias se necesita hacerlo
  // en el constructor de una clase. Se ha de indicar un 
  // párametro con un modificador de acceso (obligatorio).
  // Además, se ha de anotar su tipo, que no es otro que el
  // servicio a inyectar.
  constructor (private _contactosService: ContactosService) { }

  // En el hook 'OnInit' se inicializan los datos del componente.
  ngOnInit () {
    // Se llama al servicio de contactos para obtener la lista
    // Para ello se mueve lo que devuelva 'obtenerContactos' en 
    // la variable de contactos (lista contactos que se está pintando).
    this.contactos = this._contactosService.obtenerContactos();
  }

  eliminarContacto(contacto: string): void {
    // La función eliminar contacto es la que se encuentra enlazada 
    // con el boton (es el manejador) por lo que se mantiene y dentro 
    // de ella se llama al método de eliminar contactos del servicio.
    this._contactosService.eliminarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }
}
