import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpService } from "@core/services/http.service";
import { ServicioElectrico } from "@servicioelectrico/shared/model/servicio-electrico";
import { ServicioElectricoService } from "@servicioelectrico/shared/service/servicio-electrico-service";
import { of } from "rxjs";
import { ListarServicioelectricoComponent } from "./listar-servicioelectrico.component";

describe('ListarServicioelectricoComponent', () => {
  let component: ListarServicioelectricoComponent;
  let fixture: ComponentFixture<ListarServicioelectricoComponent>;
  let servicioElectricoService: ServicioElectricoService;
  const listarServicioElectricos: ServicioElectrico[] = [new ServicioElectrico('1', '2', '1717213183', 'Elivar Largo', 'Enero', new Date(), 15), new ServicioElectrico('2', '2', '1717213183', 'Elivar Largo', 'Enero', new Date(), 15)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarServicioelectricoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ServicioElectricoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioelectricoComponent);
    component = fixture.componentInstance;
    servicioElectricoService: TestBed.inject(ServicioElectricoService);
    spyOn(servicioElectricoService, 'consultar').and.returnValue(
      of(listarServicioElectricos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
