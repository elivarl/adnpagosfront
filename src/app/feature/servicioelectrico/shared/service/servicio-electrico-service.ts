import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { ServicioElectrico } from '../model/servicio-electrico';

@Injectable()
export class ServicioElectricoService {
    private url:string=`${environment.endpoint}/servicios`;
    
    constructor(protected http: HttpService){}

    public guardar (servicioElectrico: ServicioElectrico){
        console.log('URL: '+this.url);
        console.log(servicioElectrico);
        return this.http.doPost<ServicioElectrico,boolean>(this.url, servicioElectrico, this.http.optsName('crear/actualizar productos'));

    }

    public consultar(){
        return this.http.doGet<ServicioElectrico []>(this.url, this.http.optsName('consultar servicios electricos'));
    }

    public eliminar (servicioElectrico: ServicioElectrico){
        return this.http.doDelete<boolean>(this.url+servicioElectrico.id, this.http.optsName('eliminar servicio electrico')
        );
    }
}
