import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioElectricoService } from '@servicioelectrico/shared/service/servicio-electrico-service';
import { of } from 'rxjs';

import { CrearServicioelectricoComponent } from './crear-servicioelectrico.component';

describe('CrearServicioelectricoComponent', () => {
  let component: CrearServicioelectricoComponent;
  let fixture: ComponentFixture<CrearServicioelectricoComponent>;
  let servicioElectricoService: ServicioElectricoService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearServicioelectricoComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ],
        providers: [ServicioElectricoService, HttpService],
      })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioelectricoComponent);
    component = fixture.componentInstance;
    servicioElectricoService = TestBed.inject(ServicioElectricoService);
    spyOn(servicioElectricoService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.servicioElectricoForm.valid).toBeFalsy();
  });

  it('Registrando servicio', () => {
    expect(component.servicioElectricoForm.valid).toBeFalsy();

    component.servicioElectricoForm.controls.id.setValue('1');
    component.servicioElectricoForm.controls.numeroServicio.setValue('111111');
    expect(component.servicioElectricoForm.valid).toBeTruthy();


    //expect(component.crearServicio()).toEqual(1);

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
