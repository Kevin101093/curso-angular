import { Component } from '@angular/core';
import { EmpleadosComponent } from "./empleados/empleados.component";
import { EmpleadoComponent } from "./empleado/empleado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadosComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-primera-aplicacion';
  saludo = 'Hola soy Kevin';
}
