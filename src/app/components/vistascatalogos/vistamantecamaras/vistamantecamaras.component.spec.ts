import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistamantecamarasComponent } from './vistamantecamaras.component';

describe('VistamantecamarasComponent', () => {
  let component: VistamantecamarasComponent;
  let fixture: ComponentFixture<VistamantecamarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistamantecamarasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistamantecamarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
