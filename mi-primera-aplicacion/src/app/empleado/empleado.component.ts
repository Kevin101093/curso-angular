import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
  //styles:['p{background-color:red}'] //Es de forma inline.
})
export class EmpleadoComponent {

  nombre = 'Juan';
  apellido = 'Días';
  edad = 18;
  empresa = ''

  //Método obtener
  /*getEdad(){
   return this.edad;
  }
   */

}
