import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../contacto';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent {

  @Output() clickBotonGuardar = new EventEmitter<Contacto>();

  notificarContacto(formulario: FormGroup): void{
    let contacto = new Contacto (
      formulario.value.nombreContacto,
      formulario.value.apellidoContacto,
      formulario.value.movilContacto,
      formulario.value.emailContacto,
      formulario.value.facebookContacto,
      formulario.value.twitterContacto,
      formulario.value.githubContacto
    );
    this.clickBotonGuardar.emit(contacto);
    formulario.reset();
  }

}
