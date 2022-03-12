import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniadirPagosComponent } from './components/aniadir-pagos/aniadir-pagos.component';
import { ListarPagoDetalleComponent } from './components/listar-pago-detalle/listar-pago-detalle.component';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { PagoComponent } from './components/pago/pago.component';

const routes: Routes = [
    {
        path: '',
        component: PagoComponent,
        children: [
            {
                path: 'servicios',
                component: AniadirPagosComponent
            },
            {
                path: 'addserviciopago/:idservicio',
                component: AniadirPagosComponent
            },            
            {
                path:'listar',
                component: ListarPagoComponent
            },
            {
                path: 'listarpagodetalle/:idpago',
                component: ListarPagoDetalleComponent
            }
        ]
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class PagoRoutingModule {

}
