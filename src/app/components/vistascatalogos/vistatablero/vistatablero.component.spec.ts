import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistatableroComponent } from './vistatablero.component';

describe('VistatableroComponent', () => {
  let component: VistatableroComponent;
  let fixture: ComponentFixture<VistatableroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistatableroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistatableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
