import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '@pago/shared/model/Pago';
import { PagoService } from '@pago/shared/service/pago-service';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { Observable } from 'rxjs';

const FECHA_PAGO_POR_DEFECTO = '2022-02-26 13:17:17';
const ID_PAGO_POR_DEFECTO = '1';
const IDENTIFICACION_CLIENTE_POR_DEFECTO = '1717213183';
const SUBTOTAL_PAGO_POR_DEFECTO = 0;
const TOTAL_PAGO_POR_DEFECTO = 0;
const VALOR_DESCUENTO_RECARGO_PAGO_POR_DEFECTO = 0;
const PORCENTAJE_DESCUENTO_RECARGO_PAGO_POR_DEFECTO = '0';

@Component({
  selector: 'app-aniadir-pagos',
  templateUrl: './aniadir-pagos.component.html',
  styleUrls: ['./aniadir-pagos.component.css']
})
export class AniadirPagosComponent implements OnInit {
  pagoForm: FormGroup
  public pago: Pago;
  public pagoRequest: Pago;
  protected servicioElectrico: ServicioElectrico;
  public listaServiciosElectricos: Observable<ServicioElectrico[]>;

  public listaServiciosElectricosTemporalMostrar: Array<ServicioElectrico> = [];




  constructor(protected pagoService: PagoService, protected servicioElectricoService: ServicioElectricoService,
    protected activatedRoute: ActivatedRoute, protected router: Router) { }

  ngOnInit(): void {
    this.listaServiciosElectricos = this.servicioElectricoService.consultar();
    this.pagoForm = new FormGroup({
      total: new FormControl(),
      subTotal: new FormControl(),
      porcentajeRecargoDescuento: new FormControl(),
      valorRecargoDescuento: new FormControl(),

    });
    this.pagoRequest = new Pago(ID_PAGO_POR_DEFECTO, FECHA_PAGO_POR_DEFECTO,
      IDENTIFICACION_CLIENTE_POR_DEFECTO, SUBTOTAL_PAGO_POR_DEFECTO,
      PORCENTAJE_DESCUENTO_RECARGO_PAGO_POR_DEFECTO, VALOR_DESCUENTO_RECARGO_PAGO_POR_DEFECTO,
      TOTAL_PAGO_POR_DEFECTO, this.listaServiciosElectricosTemporalMostrar);

  }

  addServicioAlPago() {
    this.pago = new Pago(ID_PAGO_POR_DEFECTO, FECHA_PAGO_POR_DEFECTO,
      IDENTIFICACION_CLIENTE_POR_DEFECTO, SUBTOTAL_PAGO_POR_DEFECTO,
      PORCENTAJE_DESCUENTO_RECARGO_PAGO_POR_DEFECTO, VALOR_DESCUENTO_RECARGO_PAGO_POR_DEFECTO,
      TOTAL_PAGO_POR_DEFECTO, this.listaServiciosElectricosTemporalMostrar);
    this.pago.comandoServicioElectricos = this.listaServiciosElectricosTemporalMostrar;
    this.pagoService.aniadirServicio(this.pago).subscribe(
      pagoConServicioAdd => {
        this.pagoRequest = pagoConServicioAdd;
      }
    );
  }

  // busca y añade el servicio para un pago
  buscaServicioElectricoParaAddPago(idservicio: number) {
    this.servicioElectricoService.obtenerPorId(idservicio).subscribe(
      servicioElectrico => {
        this.listaServiciosElectricosTemporalMostrar.push(servicioElectrico);
        this.addServicioAlPago();

      }
    );

  }

  guardar() {
    this.ponerValoresDespuesAddServicioAlPago();
    this.pagoService.guardar(this.pago).subscribe(
      () => {
        this.router.navigate(['/']);
      }

    );
  }

  ponerValoresDespuesAddServicioAlPago() {
    this.pago.subTotal = this.pagoRequest.subTotal;
    this.pago.porcentajeDescuentoRecargo = this.pagoRequest.porcentajeDescuentoRecargo;
    this.pago.valorDescuentoRecargo = this.pagoRequest.valorDescuentoRecargo;
    this.pago.total = this.pagoRequest.total;
  }

}
