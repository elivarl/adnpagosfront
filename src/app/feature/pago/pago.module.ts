import { NgModule } from '@angular/core';
import { PagoComponent } from './components/pago/pago.component';
import { PagoRoutingModule } from './pago-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AniadirPagosComponent } from './components/aniadir-pagos/aniadir-pagos.component';
import { PagoService } from './shared/service/pago-service';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { ListarPagoDetalleComponent } from './components/listar-pago-detalle/listar-pago-detalle.component';




@NgModule({
  declarations: [
    AniadirPagosComponent,
    PagoComponent,
    CrearPagoComponent,
    ListarPagoComponent,
    ListarPagoDetalleComponent
  ],
  imports: [
    PagoRoutingModule,
    SharedModule

  ],
  providers:[PagoService]
})
export class PagoModule { }
