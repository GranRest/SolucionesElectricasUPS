import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteniupsComponent } from './manteniups.component';

describe('ManteniupsComponent', () => {
  let component: ManteniupsComponent;
  let fixture: ComponentFixture<ManteniupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteniupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteniupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
