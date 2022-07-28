import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenitableroComponent } from './mantenitablero.component';

describe('MantenitableroComponent', () => {
  let component: MantenitableroComponent;
  let fixture: ComponentFixture<MantenitableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenitableroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenitableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
