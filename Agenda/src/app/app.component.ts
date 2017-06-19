import { Component, OnInit } from '@angular/core';

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

  // En el hook 'OnInit' se inicializan los datos del componente.
  ngOnInit () {
    this.contactos = [
      'Son Goku',
      'Megaman',
      'Spider-Man',
      'Sheldon Cooper',
      'Chicho Terremoto'
    ];
  }

  eliminarContacto(contacto: string): void {
    // Se elimina el contacto del array mediante un filtro
    // this.contactos = this.contactos.filter((c: string): boolean => {
    //  return c !== contacto;
    // });

    // Se elimina el contacto del array mediante una eliminación de la 
    // posición del registro
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
  }
}
