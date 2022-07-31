import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecatalogoComponent } from './detallecatalogo.component';

describe('DetallecatalogoComponent', () => {
  let component: DetallecatalogoComponent;
  let fixture: ComponentFixture<DetallecatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallecatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
