import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistamanteelectricoComponent } from './vistamanteelectrico.component';

describe('VistamanteelectricoComponent', () => {
  let component: VistamanteelectricoComponent;
  let fixture: ComponentFixture<VistamanteelectricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistamanteelectricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistamanteelectricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
