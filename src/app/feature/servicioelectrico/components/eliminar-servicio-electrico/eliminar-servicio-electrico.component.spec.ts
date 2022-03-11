import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarServicioElectricoComponent } from './eliminar-servicio-electrico.component';

describe('EliminarServicioElectricoComponent', () => {
  let component: EliminarServicioElectricoComponent;
  let fixture: ComponentFixture<EliminarServicioElectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarServicioElectricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarServicioElectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
