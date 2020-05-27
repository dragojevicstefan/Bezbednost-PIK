import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfsignedComponent } from './add-selfsigned.component';

describe('AddSelfsignedComponent', () => {
  let component: AddSelfsignedComponent;
  let fixture: ComponentFixture<AddSelfsignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSelfsignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelfsignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
