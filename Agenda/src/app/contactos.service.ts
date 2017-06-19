import { Injectable } from '@angular/core';

// Un servicio es una clase decorada con 'Injectable'. Este decorador 
// no necesita que se le indique ningún metadato. Es importante que no 
// olvidarse de añadir el servicio en la colección de 'providers' del 
// módulo de la aplicación.
@Injectable()
export class ContactosService {

  private _contactos: string[];

  constructor() { 
    this._contactos = [
      'Son Goku',
      'Megaman',
      'Spider-Man',
      'Sheldon Cooper',
      'Chicho Terremoto'
    ];
  }

  // Se crea una función para no exponer la lista
  obtenerContactos (): string[] {
    return this._contactos;
  }
  

  eliminarContacto(contacto: string): void {
    // Se elimina el contacto del array mediante un filtro
    // this._contactos = this._contactos.filter((c: string): boolean => {
    //  return c !== contacto;
    // });

    // Se elimina el contacto del array mediante una eliminación de la 
    // posición del registro
    let posicion = this._contactos.indexOf(contacto);
    this._contactos.splice(posicion, 1);
  }

}
