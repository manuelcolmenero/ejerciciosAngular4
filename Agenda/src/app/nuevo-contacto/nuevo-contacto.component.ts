import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { ContactosService } from "../contactos.service";
import { Contacto } from "../contacto";

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  constructor (
    private _contactosService: ContactosService,
    private _router: Router) { }

  guardarContacto(contacto: Contacto): void {
    this._contactosService
      .altaContacto(contacto)
      .subscribe(() => {
        alert ('El contacto se ha creado satisfactoriamente :-)');
        this._router.navigate(['/mis-contactos']);
      });
  }
}
