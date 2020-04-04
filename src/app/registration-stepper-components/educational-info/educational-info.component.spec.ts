import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInfoComponent } from './educational-info.component';

describe('EducationalInfoComponent', () => {
  let component: EducationalInfoComponent;
  let fixture: ComponentFixture<EducationalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
