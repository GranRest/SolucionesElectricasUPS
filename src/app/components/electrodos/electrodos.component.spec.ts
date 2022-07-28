import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodosComponent } from './electrodos.component';

describe('ElectrodosComponent', () => {
  let component: ElectrodosComponent;
  let fixture: ComponentFixture<ElectrodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectrodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
