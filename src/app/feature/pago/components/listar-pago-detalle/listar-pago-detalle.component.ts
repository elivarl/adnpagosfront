import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagoDetalle } from '@pago/shared/model/PagoDetalle';
import { PagoService } from '@pago/shared/service/pago-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pago-detalle',
  templateUrl: './listar-pago-detalle.component.html',
  styleUrls: ['./listar-pago-detalle.component.css']
})
export class ListarPagoDetalleComponent implements OnInit {
  public listaPagoDetalles:Observable<PagoDetalle[]>;
  constructor(protected pagoService:PagoService, protected activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPagoDetalles();
  }

  cargarPagoDetalles(){
    console.log('Hola pago detalles');
    this.activatedRoute.params.subscribe(
      
      params=>{
        let idpago=params['idpago'];
        if(idpago){
          this.listaPagoDetalles=this.pagoService.consultarPagoDetalle(idpago);
          console.log(this.listaPagoDetalles);

        }
      }
    );
  }



}
