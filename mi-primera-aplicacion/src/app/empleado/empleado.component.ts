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

  habilitacionCuadroTexto = true;
  textoDeRegistro = "No hay usuario registrado";

  usuRegistrado = false;

  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    //alert('El usuario se acaba de registrar');
    //this.textoDeRegistro = "El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value=="si"){
        this.textoDeRegistro = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro = "El usuario no esta registrado";
    }
  }

}
