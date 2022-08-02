import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableadoestructuradoComponent } from './cableadoestructurado.component';

describe('CableadoestructuradoComponent', () => {
  let component: CableadoestructuradoComponent;
  let fixture: ComponentFixture<CableadoestructuradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CableadoestructuradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CableadoestructuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
