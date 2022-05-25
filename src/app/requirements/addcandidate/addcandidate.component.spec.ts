import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandidateComponent } from './addcandidate.component';

describe('AddcandidateComponent', () => {
  let component: AddcandidateComponent;
  let fixture: ComponentFixture<AddcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
