import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from "./contacto";

// Un pipe es una clase decorada con 'Pipe'. Es necesario que se indique el metadato 'name', ya que es el identificador del pipe que se usará en los templates para usarlo. Un pipe tiene que implementar siempre la interface 'Pipetransform', que a su vez obliga a implementar la función 'transform'.
@Pipe({
  name: 'ordenContactos'
})
export class OrdenContactosPipe implements PipeTransform {

  // En 'transform' siempre vendrá dado, al menos, un parámetro: el dato que va a sufrir la transformación.
  transform(contactos: Contacto[]): Contacto[] {

    let ordenados: Contacto[];

    if (contactos) {

      ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {

        let resultado: number;

        // Si el nombre del contacto A es Mayor que el nombre del contacto B, significa que la ordenación A-Z es correcta y por tanto, como resultado de la comparación, retornamos 1
        if (contactoA.nombre > contactoB.nombre) {
          resultado = 1;

        // Si el nombre del contacto A es Mayor que el nombre del contacto B, significa que la ordenación A-Z es incorrecta y por tanto, como resultado de la comparación, retornamos -1
        } else if (contactoA.nombre < contactoB.nombre) {
          resultado = -1;

        // Si el nombre del contacto A es Mayor que el nombre del contacto B, significa que la ordenación A-Z es correcta y por tanto, como resultado de la comparación, retornamos 0
        } else {
          resultado = 0;
        }

        return resultado;

      });
    // Si la colección de contactos es nula.
    } else {
      ordenados = [];
    }

    return ordenados;
  }

}
