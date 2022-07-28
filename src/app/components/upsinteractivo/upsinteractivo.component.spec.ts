import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsinteractivoComponent } from './upsinteractivo.component';

describe('UpsinteractivoComponent', () => {
  let component: UpsinteractivoComponent;
  let fixture: ComponentFixture<UpsinteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsinteractivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsinteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
