import { Component, OnInit } from '@angular/core';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-servicioelectrico',
  templateUrl: './listar-servicioelectrico.component.html',
  styleUrls: ['./listar-servicioelectrico.component.css']
})
export class ListarServicioelectricoComponent implements OnInit {

  public listaServiciosElectricos: Observable<ServicioElectrico[]>;

  constructor(protected servicioElectricoService: ServicioElectricoService) { }

  ngOnInit(): void {
    this.listaServiciosElectricos = this.servicioElectricoService.consultar();
  }

}
