import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpermissionsComponent } from './addpermissions.component';

describe('AddpermissionsComponent', () => {
  let component: AddpermissionsComponent;
  let fixture: ComponentFixture<AddpermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
