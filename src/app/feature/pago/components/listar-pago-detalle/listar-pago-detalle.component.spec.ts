import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPagoDetalleComponent } from './listar-pago-detalle.component';

describe('ListarPagoDetalleComponent', () => {
  let component: ListarPagoDetalleComponent;
  let fixture: ComponentFixture<ListarPagoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPagoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
