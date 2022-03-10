import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioElectricoService } from '../../shared/service/servicio-electrico-service';

@Component({
  selector: 'app-crear-servicioelectrico',
  templateUrl: './crear-servicioelectrico.component.html',
  styleUrls: ['./crear-servicioelectrico.component.css']
})
export class CrearServicioelectricoComponent implements OnInit {
  servicioElectricoForm:FormGroup;

  constructor( protected servicioElectricoService:ServicioElectricoService ) { }

  ngOnInit(): void {
    this.construirFormularioServicio();
  }

  crear(){
    this.servicioElectricoService.guardar(this.servicioElectricoForm.value).subscribe(
      respuesta=>{
        if(respuesta){
          this.servicioElectricoForm.reset();
        }        
      }
    );
  }


  private construirFormularioServicio(){
    this.servicioElectricoForm= new FormGroup({
      numeroServicio: new FormControl('', [Validators.required]),
      identificacionCliente: new FormControl('',[Validators.required]),
      nombreCliente: new FormControl('',[Validators.required]),
      mes: new FormControl('',[Validators.required]),
      fechaMaximaPago: new FormControl('',[Validators.required]),
      valor: new FormControl('',[Validators.required])

    });

  }

}

