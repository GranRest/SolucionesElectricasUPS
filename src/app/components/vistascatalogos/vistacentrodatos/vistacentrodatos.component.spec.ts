import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacentrodatosComponent } from './vistacentrodatos.component';

describe('VistacentrodatosComponent', () => {
  let component: VistacentrodatosComponent;
  let fixture: ComponentFixture<VistacentrodatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacentrodatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistacentrodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
