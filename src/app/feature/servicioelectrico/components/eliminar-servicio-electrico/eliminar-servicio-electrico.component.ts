import { Component, OnInit } from '@angular/core';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eliminar-servicio-electrico',
  templateUrl: './eliminar-servicio-electrico.component.html',
  styleUrls: ['./eliminar-servicio-electrico.component.css']
})
export class EliminarServicioElectricoComponent implements OnInit {

  public listaServiciosElectricos:Observable<ServicioElectrico[]>;

  constructor(protected servicioElectricoService: ServicioElectricoService) { }

  ngOnInit(): void {
  }

  eliminar(servicioElectrico: ServicioElectrico){
    this.servicioElectricoService.eliminar(servicioElectrico).subscribe(
      ()=>{
        this.listaServiciosElectricos=this.servicioElectricoService.consultar();
      }

    );

  }

}
