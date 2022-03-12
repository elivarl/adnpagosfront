import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CrearServicioelectricoComponent } from './components/crear-servicioelectrico/crear-servicioelectrico.component';
import { EliminarServicioElectricoComponent } from './components/eliminar-servicio-electrico/eliminar-servicio-electrico.component';
import { ListarServicioelectricoComponent } from './components/listar-servicioelectrico/listar-servicioelectrico.component';
import { ServicioelectricoComponent } from './components/servicioelectrico/servicioelectrico.component';
const routes: Routes = [{
    path: '',
    component: ServicioelectricoComponent,
    children: [
        {
            path: 'crear',
            component: CrearServicioelectricoComponent
        },
        {
            path: 'listar',
            component: ListarServicioelectricoComponent
        },
        {
            path: 'actualizar/:id',
            component: CrearServicioelectricoComponent
        },
        {
            path: 'eliminar/:id',
            component: EliminarServicioElectricoComponent
        }
    ]
}];


@NgModule(
    {
        imports: [RouterModule.forChild(routes)],

        exports: [RouterModule]
    }
)

export class ServicioElectricoRoutingModule{}
