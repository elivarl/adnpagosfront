import { Injectable } from "@angular/core";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { ServicioElectrico } from "../model/servicio-electrico";

@Injectable()
export class ServicioElectricoService {
    
    constructor(protected http: HttpService){}

    public guardar (servicioElectrico: ServicioElectrico){
        return this.http.doPost<ServicioElectrico,boolean>(`${environment.endpoint}/servicios`, servicioElectrico, this.http.optsName('crear/actualizar productos'));

    }

    public consultar(){
        return this.http.doGet<ServicioElectrico []>(`${environment.endpoint}/servicios`, this.http.optsName('consultar servicios electricos'));
    }

    public eliminar (servicioElectrico: ServicioElectrico){
        return this.http.doDelete<boolean>(`${environment.endpoint}/servicios/${servicioElectrico.id}`, this.http.optsName('eliminar servicio electrico')
        );
    }
}
