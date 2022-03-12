import { Component, OnInit } from '@angular/core';
import { Pago } from '@pago/shared/model/Pago';
import { PagoService } from '@pago/shared/service/pago-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.css']
})
export class ListarPagoComponent implements OnInit {

  public listaPagos: Observable<Pago[]>;

  constructor(protected pagoService: PagoService) { }

  ngOnInit(): void {
    this.listaPagos = this.pagoService.consultar();
  }

}
