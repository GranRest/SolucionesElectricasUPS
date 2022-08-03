import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistareguladoresComponent } from './vistareguladores.component';

describe('VistareguladoresComponent', () => {
  let component: VistareguladoresComponent;
  let fixture: ComponentFixture<VistareguladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistareguladoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistareguladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
