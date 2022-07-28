import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsonlineComponent } from './upsonline.component';

describe('UpsonlineComponent', () => {
  let component: UpsonlineComponent;
  let fixture: ComponentFixture<UpsonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsonlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpsonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
