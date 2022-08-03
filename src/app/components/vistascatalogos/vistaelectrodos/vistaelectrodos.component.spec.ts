import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaelectrodosComponent } from './vistaelectrodos.component';

describe('VistaelectrodosComponent', () => {
  let component: VistaelectrodosComponent;
  let fixture: ComponentFixture<VistaelectrodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaelectrodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaelectrodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
