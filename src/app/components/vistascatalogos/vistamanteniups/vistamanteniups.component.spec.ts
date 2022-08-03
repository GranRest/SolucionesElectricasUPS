import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistamanteniupsComponent } from './vistamanteniups.component';

describe('VistamanteniupsComponent', () => {
  let component: VistamanteniupsComponent;
  let fixture: ComponentFixture<VistamanteniupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistamanteniupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistamanteniupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
