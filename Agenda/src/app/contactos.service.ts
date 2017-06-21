import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { environment } from '../environments/environment';

import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'. Este decorador
// no necesita que se le indique ningún metadato. Es importante que no 
// olvidarse de añadir el servicio en la colección de 'providers' del 
// módulo de la aplicación.
@Injectable()
export class ContactosService {

  constructor(private _http: Http) { }

  // Se crea una función para no exponer la lista.
  obtenerContactos (): Observable<Contacto[]> {

    // El cliente HTTP trabaja con objetos 'Response'. Este objeto tiene datos relacionados 
    // con la respuesta del servidor: cabeceras, status, body, etc... Nunca se debe subir 
    // este objeto a la capa superior (componentes). Por lo tanto, se debe transformar este 
    // objeto en el que ha solicitado el componente, en este caso 'Contacto[]'; para hacer 
    // dicha operación se utiliza la función 'map', que es un operador de los objetos 
    // 'Observables'. Este operador transforma un 'Observable' en otro.
    return this._http
               .get(`${environment.apiUri}/contactos`)
               .map((respuesta: Response) => {
                 return Contacto.nuevaColeccionDesdeJson(respuesta.json());
               });
  }
  
  altaContacto (contacto: Contacto): Observable<Contacto> {
    // En aquellas peticiones HTTP que envian datos a servidor (POST, PUSH, PATCH...), 
    // se deben indicar (los datos) como segundo parámetro de la función correspondiente. 
    // En este caso, se está enviando el contacto a crear el cuerpo del contacto.
    return this._http
               .post(`${environment.apiUri}/contactos`, contacto)
               .map((respuesta: Response) => {
                 return Contacto.nuevoDesdeJson(respuesta.json());
               });

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
