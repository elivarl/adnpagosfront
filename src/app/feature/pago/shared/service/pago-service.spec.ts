import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ServicioElectrico } from 'src/app/feature/servicioelectrico/shared/model/servicio-electrico';
import { environment } from 'src/environments/environment';
import { Pago } from '../model/Pago';
import { PagoDetalle } from '../model/PagoDetalle';
import { PagoService } from './pago-service';

describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service:PagoService;
  const apiEndpointPagos=`${environment.endpoint}/pagos`;


  beforeEach(()=>{
    const injector=TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [PagoService, HttpService]
    });
    httpMock=injector.inject(HttpTestingController);
    service=TestBed.inject(PagoService);
  });


  it('should be created', () => {
    const pagoService:PagoService=TestBed.inject(PagoService);
    expect(pagoService).toBeTruthy();
  });

  it('deberia crear un pago',()=>{
    const dummyPago=new Pago('1',new Date(), '1717213183',10.0,'0',0,10,[ new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15),
      new ServicioElectrico('2','123','1717213183','Elivar Largo','Enero',new Date(),15)]);
    service.guardar(dummyPago).subscribe(
      (respuesta)=>{
        expect(respuesta).toEqual(true);
      }
    );
    const req=httpMock.expectOne(apiEndpointPagos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body:true}));

  });


  it('deberia listar los pagos', ()=>{
    const dummyPagos=[new Pago('1',new Date(), '1717213183',10.0,'0',0,10,[ new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15),
      new ServicioElectrico('2','123','1717213183','Elivar Largo','Enero',new Date(),15)])];
    service.consultar().subscribe(
      pagos=>{
        expect(pagos.length).toBe(1);
        expect(pagos).toEqual(dummyPagos);
      }
    );

    const req= httpMock.expectOne(apiEndpointPagos);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPagos);

  });

  it('deberia lista los detalles de un pago',()=>{
    const dummyPagoDetalles=[new PagoDetalle('Pago mes enero',10),new PagoDetalle('Pago mes febrero',20),];

    const dummyPago=new Pago('1',new Date(), '1717213183',10.0,'0',0,10,[ new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15),
    new ServicioElectrico('2','123','1717213183','Elivar Largo','Enero',new Date(),15)]);

    service.consultarPagoDetalle(dummyPago).subscribe(
      pagodetalles=>{
        expect(pagodetalles.length).toBe(2);
        expect(pagodetalles).toEqual(dummyPagoDetalles);
      }
    );

    const req= httpMock.expectOne(`${apiEndpointPagos}/pagodetalles/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPagoDetalles);

  });


  it('deberia añadir un detalle de un pago',()=>{

    const dummyPago=new Pago('1',new Date(), '1717213183',10.0,'0',0,10,[ new ServicioElectrico('1','1234','1717213183','Elivar Largo','Enero',new Date(),15),
    new ServicioElectrico('2','123','1717213183','Elivar Largo','Enero',new Date(),15)]);

    service.aniadirServicio(dummyPago).subscribe(
      respuesta=>{
        expect(respuesta).toEqual(dummyPago);
      }
           
    );
    const req= httpMock.expectOne(`${apiEndpointPagos}/detalle`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPago);

  });
});
