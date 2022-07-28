import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoresComponent } from './acumuladores.component';

describe('AcumuladoresComponent', () => {
  let component: AcumuladoresComponent;
  let fixture: ComponentFixture<AcumuladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcumuladoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcumuladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
