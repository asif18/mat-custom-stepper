import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialInfoComponent } from './residential-info.component';

describe('ResidentialInfoComponent', () => {
  let component: ResidentialInfoComponent;
  let fixture: ComponentFixture<ResidentialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
