import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirPagosComponent } from './aniadir-pagos.component';

describe('AniadirPagosComponent', () => {
  let component: AniadirPagosComponent;
  let fixture: ComponentFixture<AniadirPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
