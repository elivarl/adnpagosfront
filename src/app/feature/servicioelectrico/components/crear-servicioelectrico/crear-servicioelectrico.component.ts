import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioElectrico } from '@servicioelectrico/shared/model/servicio-electrico';
import { ServicioElectricoService } from '../../shared/service/servicio-electrico-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-servicioelectrico',
  templateUrl: './crear-servicioelectrico.component.html',
  styleUrls: ['./crear-servicioelectrico.component.css']
})
export class CrearServicioelectricoComponent implements OnInit {
  servicioElectricoForm: FormGroup;
  servicioElecrtrico: ServicioElectrico;

  constructor(protected servicioElectricoService: ServicioElectricoService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.construirFormularioServicio();
    this.cargar();
  }

  crear() {
    if (this.servicioElectricoForm.get('id').value) {
      this.servicioElectricoService.actualizar(this.servicioElectricoForm.value).subscribe(
        () => {
            this.servicioElectricoForm.reset();
            this.router.navigate(['servicio//crear']);
        }
      );
    } else {
      this.servicioElectricoService.guardar(this.servicioElectricoForm.value).subscribe(
        respuesta => {
          if (respuesta) {
            console.log('reseet '+respuesta);
            this.servicioElectricoForm.reset();
          }
        }
      );

    }
  }



  private construirFormularioServicio() {
    this.servicioElectricoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      numeroServicio: new FormControl('', [Validators.required]),
      identificacionCliente: new FormControl('', [Validators.required]),
      nombreCliente: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      fechaMaximaPago: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required])

    });

  }

  cargar(): void {

    this.activatedRoute.params.subscribe(
      respuesta => {
        let id = respuesta['id'];
        if (id) {
          this.servicioElectricoService.obtenerPorId(id).subscribe(
            servicio => {
              this.servicioElecrtrico = servicio;
              this.servicioElectricoForm.get('id').setValue(this.servicioElecrtrico.id);
              this.servicioElectricoForm.get('numeroServicio').setValue(this.servicioElecrtrico.numeroServicio);
              this.servicioElectricoForm.get('identificacionCliente').setValue(this.servicioElecrtrico.identificacionCliente);
              this.servicioElectricoForm.get('nombreCliente').setValue(this.servicioElecrtrico.nombreCliente);
              this.servicioElectricoForm.get('mes').setValue(this.servicioElecrtrico.mes);
              this.servicioElectricoForm.get('fechaMaximaPago').setValue(this.servicioElecrtrico.fechaMaximaPago);
              this.servicioElectricoForm.get('valor').setValue(this.servicioElecrtrico.valor);

              console.log('Hola...' + this.servicioElectricoForm.get('id').value);

            }
          );
        }

      }

    );
  }
}

