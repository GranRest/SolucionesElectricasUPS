import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenielecComponent } from './mantenielec.component';

describe('MantenielecComponent', () => {
  let component: MantenielecComponent;
  let fixture: ComponentFixture<MantenielecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenielecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenielecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
