import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contacto } from "../contacto";

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador Input se exponen atributos para 
  // que puedan enlazar datos desde otros componentes
  @Input () datos: Contacto[];

  // Con el decorador 'Output' se exponen eventos a otros
  // componentes. Es necesario, además, que el atributo
  // decorado sea de tipo 'EventEmitter'
  @Output () clicBotonEliminar = new EventEmitter<Contacto>();

  notificarEliminacion(regEliminar: Contacto): void {
    // Se notifica 
    this.clicBotonEliminar.emit(regEliminar);
  }
}
