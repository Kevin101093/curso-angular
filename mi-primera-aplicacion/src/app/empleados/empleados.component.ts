import { Component } from "@angular/core";
import { RouterOutlet} from "@angular/router";
import { EmpleadoComponent } from "../empleado/empleado.component";



@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [RouterOutlet, EmpleadoComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})

export class EmpleadosComponent {

}
