import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenicamarasComponent } from './mantenicamaras.component';

describe('MantenicamarasComponent', () => {
  let component: MantenicamarasComponent;
  let fixture: ComponentFixture<MantenicamarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenicamarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenicamarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
