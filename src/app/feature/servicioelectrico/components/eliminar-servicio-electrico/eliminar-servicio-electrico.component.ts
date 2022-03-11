import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eliminar-servicio-electrico',
  templateUrl: './eliminar-servicio-electrico.component.html',
  styleUrls: ['./eliminar-servicio-electrico.component.css']
})
export class EliminarServicioElectricoComponent implements OnInit {

  public listaServiciosElectricos:Observable<ServicioElectrico[]>;
  servicioElectrico:ServicioElectrico;

  constructor(protected servicioElectricoService: ServicioElectricoService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cargarServicioElectricoEliminar();
    
  }

  eliminar(servicioElectrico: ServicioElectrico){
    this.servicioElectricoService.eliminar(servicioElectrico).subscribe(
      ()=>{
        this.listaServiciosElectricos=this.servicioElectricoService.consultar();
      }

    );
  }

  cargarServicioElectricoEliminar(){
    console.log('entrando a eliminar.');
    this.activatedRoute.params.subscribe(
      param=>{
        let id=param['id'];
        if(id){
          this.servicioElectricoService.obtenerPorId(id).subscribe(
            servicio=>{
              this.servicioElectrico=servicio;
              this.eliminar(this.servicioElectrico);
              this.router.navigate(['servicio//listar']);
            }
          );
        }
      }
    );

  }

}
