import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasEstampillasComponent } from './ventas-estampillas.component';

describe('VentasEstampillasComponent', () => {
  let component: VentasEstampillasComponent;
  let fixture: ComponentFixture<VentasEstampillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasEstampillasComponent]
    });
    fixture = TestBed.createComponent(VentasEstampillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
