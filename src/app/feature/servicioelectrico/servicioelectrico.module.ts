import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CrearServicioelectricoComponent } from "./components/crear-servicioelectrico/crear-servicioelectrico.component";
import { ServicioelectricoComponent } from "./components/servicioelectrico/servicioelectrico.component";
import { ServicioElectricoRoutingModule } from "./servicioelectrico-routing.module";
import { ServicioElectricoService } from "./shared/service/servicio-electrico-service";
import { ListarServicioelectricoComponent } from './components/listar-servicioelectrico/listar-servicioelectrico.component';

@NgModule(
    {
        declarations:[
            CrearServicioelectricoComponent,
            ServicioelectricoComponent,
            ListarServicioelectricoComponent
        ],
        imports:[
            ServicioElectricoRoutingModule,
            SharedModule
        ],
        providers:[ServicioElectricoService]

    }
)
export class ServicioElectricoModule{}