import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInfoListComponent } from './log-info-list.component';

describe('LogInfoListComponent', () => {
  let component: LogInfoListComponent;
  let fixture: ComponentFixture<LogInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
