import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioelectricoComponent } from './servicioelectrico.component';

describe('ServicioelectricoComponent', () => {
  let component: ServicioelectricoComponent;
  let fixture: ComponentFixture<ServicioelectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioelectricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioelectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
