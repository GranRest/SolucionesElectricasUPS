import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaupsonlineComponent } from './vistaupsonline.component';

describe('VistaupsonlineComponent', () => {
  let component: VistaupsonlineComponent;
  let fixture: ComponentFixture<VistaupsonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaupsonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaupsonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
