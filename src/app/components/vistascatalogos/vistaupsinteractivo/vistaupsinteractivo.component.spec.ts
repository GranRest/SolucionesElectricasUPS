import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaupsinteractivoComponent } from './vistaupsinteractivo.component';

describe('VistaupsinteractivoComponent', () => {
  let component: VistaupsinteractivoComponent;
  let fixture: ComponentFixture<VistaupsinteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaupsinteractivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaupsinteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
