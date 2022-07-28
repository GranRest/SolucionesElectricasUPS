import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderpaginasComponent } from './sliderpaginas.component';

describe('SliderpaginasComponent', () => {
  let component: SliderpaginasComponent;
  let fixture: ComponentFixture<SliderpaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderpaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderpaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
