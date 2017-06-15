import { Component, Input } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador Input se exponen atributos para 
  // que puedan enlazar datos desde otros componentes
  @Input () datos: string[];

}
