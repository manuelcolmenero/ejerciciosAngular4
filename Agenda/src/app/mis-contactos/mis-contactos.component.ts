import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { ContactosService } from "../contactos.service";
import { Contacto } from '../contacto';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  // Atributo a nivel de instancia
  contactos$: Observable<Contacto[]>;

  // Para hacer una inyección de dependencias se necesita hacerlo
  // en el constructor de una clase. Se ha de indicar un 
  // párametro con un modificador de acceso (obligatorio).
  // Además, se ha de anotar su tipo, que no es otro que el
  // servicio a inyectar.
  constructor (private _contactosService: ContactosService) { }

  ngOnInit() {
    // Se llama al servicio de contactos para obtener la lista
    // Para ello se mueve lo que devuelva 'obtenerContactos' en 
    // la variable de contactos (lista contactos que se está pintando).
    this.contactos$ = this._contactosService.obtenerContactos();
  }

}
