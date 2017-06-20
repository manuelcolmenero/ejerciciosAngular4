import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'. Este decorador
// no necesita que se le indique ningún metadato. Es importante que no 
// olvidarse de añadir el servicio en la colección de 'providers' del 
// módulo de la aplicación.
@Injectable()
export class ContactosService {

  private _contactos: Contacto[];

  constructor(private _http: Http) { 
    this._contactos = [
      new Contacto ('Son Goku'),
      new Contacto ('Megaman'),
      new Contacto ('Spider-Man'),
      new Contacto ('Sheldon', 'Cooper'),
      new Contacto ('Chicho', 'Terremoto')
    ];
  }

  // Se crea una función para no exponer la lista
  obtenerContactos (): Observable<Contacto[]> {
    return this._http
               .get('http://localhost:3004/contactos')
               .map((respuesta: Response) => {

                 let contactos: Contacto[];
                 let contactosJson: any[] = respuesta.json();

                 contactosJson.forEach((contactosJson:any) => {
                   contactos.push(new Contacto(contactosJson.nombre));
                 });

                 return contactos;
               });
  }
  
  altaContacto (contacto: Contacto): void {
    this._contactos.push(contacto);
  }

  eliminarContacto(contacto: string): void {
    // Se elimina el contacto del array mediante un filtro
    // this._contactos = this._contactos.filter((c: string): boolean => {
    //  return c !== contacto;
    // });

    // Se elimina el contacto del array mediante una eliminación de la 
    // posición del registro
    // let posicion = this._contactos.indexOf(contacto);
    // this._contactos.splice(posicion, 1);
  }

}
