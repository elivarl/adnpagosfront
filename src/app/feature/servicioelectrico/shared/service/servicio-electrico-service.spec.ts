import { ServicioElectricoService } from './servicio-electrico-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {TestBed}from  '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioElectrico } from '../model/servicio-electrico';
import { HttpResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";

describe('ServicioElectricoService', () => {
  let httpMock: HttpTestingController;
  let service: ServicioElectricoService;
  const apiEndpointServicioElectrico= `${environment.endpoint}/servicios`;
  

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioElectricoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ServicioElectricoService);
  });


  it('should be created', () => {
    const servicioElectricoService: ServicioElectricoService = TestBed.inject(ServicioElectricoService);
    expect(servicioElectricoService).toBeTruthy();
  });

  it('deberia crear un servicio electrico', () => {
    const servicioElectrico = new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15);
    service.guardar(servicioElectrico).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointServicioElectrico);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia listar servicios electricos', () => {
    const dummyServiciosElectricos = [
      new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15),
      new ServicioElectrico('2','123','1717213183','Elivar Largo','Enero',new Date(),15),
    ];
    service.consultar().subscribe(servicioselectricos => {
      expect(servicioselectricos.length).toBe(2);
      expect(servicioselectricos).toEqual(dummyServiciosElectricos);
    });
    const req = httpMock.expectOne(apiEndpointServicioElectrico);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServiciosElectricos);
  });

  it('deberia eliminar un serivicio electrico',()=>{
    const dummyServicioElectrico= new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15);
    service.eliminar(dummyServicioElectrico).subscribe(
      (respuesta)=>{
        expect(respuesta).toEqual(true);
      });

    const req=httpMock.expectOne(`${apiEndpointServicioElectrico}/1`);
    expect(req.request.method ).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body:true}));  
    
  });
});
