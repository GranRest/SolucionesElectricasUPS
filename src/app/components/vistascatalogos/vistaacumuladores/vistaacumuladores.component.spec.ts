import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaacumuladoresComponent } from './vistaacumuladores.component';

describe('VistaacumuladoresComponent', () => {
  let component: VistaacumuladoresComponent;
  let fixture: ComponentFixture<VistaacumuladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaacumuladoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaacumuladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
