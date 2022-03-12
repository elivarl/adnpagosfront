import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '@pago/shared/model/Pago';
import { PagoService } from '@pago/shared/service/pago-service';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aniadir-pagos',
  templateUrl: './aniadir-pagos.component.html',
  styleUrls: ['./aniadir-pagos.component.css']
})
export class AniadirPagosComponent implements OnInit {
  pagoForm:FormGroup
  public pago: Pago;
  public pagoRequest:Pago;
  protected servicioElectrico: ServicioElectrico;
  public listaServiciosElectricos: Observable<ServicioElectrico[]>;

  public listaServiciosElectricosAdd: Array<ServicioElectrico> = [];



  constructor(protected pagoService: PagoService, protected servicioElectricoService: ServicioElectricoService, protected activatedRoute: ActivatedRoute, protected router:Router) { }

  ngOnInit(): void {
    this.listaServiciosElectricos = this.servicioElectricoService.consultar();
    this.pagoForm= new FormGroup({
      total: new FormControl(),
      subTotal: new FormControl(),
      porcentajeRecargoDescuento: new FormControl(),
      valorRecargoDescuento: new FormControl(),

    });
    this.pagoRequest = new Pago(null, '2022-02-26 13:17:17', '1111', 0, '', 0, 0, this.listaServiciosElectricosAdd);
   
  }

  addServicio() {
    this.pago = new Pago(null, '2022-02-26 13:17:17', '1111', 0, '', 0, 0, this.listaServiciosElectricosAdd);
    this.pago.comandoServicioElectricos = this.listaServiciosElectricosAdd;
     this.pagoService.aniadirServicio(this.pago).subscribe(
      res => {
        this.pagoRequest = res;
        console.log(this.pagoRequest);
      }
    );

  }

  // busca y añade el servicio para un pago
  cargarServicioElectrico(idservicio: number) {
    this.servicioElectricoService.obtenerPorId(idservicio).subscribe(
      servicio => {
        this.servicioElectrico = servicio;
        this.listaServiciosElectricosAdd.push(this.servicioElectrico);
        this.addServicio();

      }
    );

  }

  guardar() {
    this.ponerValoresRetorno();
    this.pagoService.guardar(this.pago).subscribe(
      ()=>{
        this.router.navigate(['/']);
      }

    );
  }

  ponerValoresRetorno(){
    this.pago.subTotal=this.pagoRequest.subTotal;
    this.pago.porcentajeDescuentoRecargo=this.pagoRequest.porcentajeDescuentoRecargo;
    this.pago.valorDescuentoRecargo=this.pagoRequest.valorDescuentoRecargo;
    this.pago.total=this.pagoRequest.total;
  }

}
