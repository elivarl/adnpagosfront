import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioElectricoService } from '../../shared/service/servicio-electrico-service';

@Component({
  selector: 'app-crear-servicioelectrico',
  templateUrl: './crear-servicioelectrico.component.html',
  styleUrls: ['./crear-servicioelectrico.component.css']
})
export class CrearServicioelectricoComponent implements OnInit {
  servicioForm:FormGroup;

  constructor( protected servicioElectricoService:ServicioElectricoService ) { }

  ngOnInit(): void {
    this.construirFormularioServicio();
  }

  crear(){
    this.servicioElectricoService.guardar(this.servicioForm.value);
  }


  private construirFormularioServicio(){
    this.servicioForm= new FormGroup({
      id: new FormControl('', [Validators.required]),
      identificacionCliente: new FormControl('',[Validators.required])
    });

  }

}
