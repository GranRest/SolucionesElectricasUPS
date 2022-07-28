import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenidatosComponent } from './mantenidatos.component';

describe('MantenidatosComponent', () => {
  let component: MantenidatosComponent;
  let fixture: ComponentFixture<MantenidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenidatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
