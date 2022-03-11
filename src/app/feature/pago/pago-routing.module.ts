import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AniadirPagosComponent } from "./components/aniadir-pagos/aniadir-pagos.component";
import { PagoComponent } from "./components/pago/pago.component";

const routes: Routes = [
    {
        path: '',
        component: PagoComponent,
        children: [{
            path: 'addproducto',
            component: AniadirPagosComponent
        }
        ]
    }
];

@NgModule(
    {
        imports:[RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)

export class PagoRoutingModule{

}