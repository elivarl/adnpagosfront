import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Pago } from '../model/Pago';
import { PagoDetalle } from '../model/PagoDetalle';

@Injectable()
export class PagoService {
    constructor(protected http:HttpService){}

    public consultar(){
        return this.http.doGet<Pago[]>(`${environment.endpoint}/pagos`,this.http.optsName('consultar pagos'));

    }

    public guardar(pago:Pago){
        return this.http.doPost<Pago, boolean>(`${environment.endpoint}/pagos`,pago,this.http.optsName('guardar un pago'));
    }

    public aniadirServicio(pago:Pago){
        return this.http.doPost<Pago,Pago>(`${environment.endpoint}/pagos/detalle`, pago,this.http.optsName('añadir detalles a un pago'));
    }

    public consultarPagoDetalle(pago:Pago){
        return this.http.doGet<PagoDetalle []>(`${environment.endpoint}/pagos/pagodetalles/${pago.id}`,this.http.optsName('consulta detalles de un pago'));

    }

}
