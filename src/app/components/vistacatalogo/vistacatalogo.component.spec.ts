import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacatalogoComponent } from './vistacatalogo.component';

describe('VistacatalogoComponent', () => {
  let component: VistacatalogoComponent;
  let fixture: ComponentFixture<VistacatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistacatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistacatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
