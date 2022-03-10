import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { CrearServicioelectricoComponent } from "./components/crear-servicioelectrico/crear-servicioelectrico.component";
import { ServicioelectricoComponent } from "./components/servicioelectrico/servicioelectrico.component";

const routes: Routes =[{
    path:'',
    component: ServicioelectricoComponent,
    children:[
        {
            path: 'crear',
            component: CrearServicioelectricoComponent
        }
    ]

    
}];


@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)

export class ServicioElectricoRoutingModule{}