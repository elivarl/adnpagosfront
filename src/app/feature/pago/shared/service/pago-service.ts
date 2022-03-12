import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Pago } from '../model/Pago';
import { PagoDetalle } from '../model/PagoDetalle';

@Injectable()
export class PagoService {
    private url: string = `${environment.endpoint}` + '/pagos';

    constructor(protected http: HttpService) { }

    public consultar() {
        return this.http.doGet<Pago []>(this.url, this.http.optsName('consultar pagos'));

    }

    public guardar(pago: Pago) {
        return this.http.doPost<Pago , boolean>(this.url, pago, this.http.optsName('guardar un pago'));
    }

    public aniadirServicio(pago: Pago) {
        return this.http.doPost<Pago , Pago>(this.url + '/detalle', pago, this.http.optsName('añadir detalles a un pago'));
    }

    public consultarPagoDetalle(id: number) {
        return this.http.doGet<PagoDetalle []>(this.url + '/pagodetalles/' + id, this.http.optsName('consulta detalles de un pago'));

    }
}
