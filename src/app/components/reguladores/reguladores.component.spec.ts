import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguladoresComponent } from './reguladores.component';

describe('ReguladoresComponent', () => {
  let component: ReguladoresComponent;
  let fixture: ComponentFixture<ReguladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReguladoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReguladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
