import { NgModule } from '@angular/core';
import { PagoComponent } from './components/pago/pago.component';
import { PagoRoutingModule } from './pago-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AniadirPagosComponent } from './components/aniadir-pagos/aniadir-pagos.component';



@NgModule({
  declarations: [
    AniadirPagosComponent,
    PagoComponent
  ],
  imports: [
    PagoRoutingModule,
    SharedModule
    
  ]
})
export class PagoModule { }
