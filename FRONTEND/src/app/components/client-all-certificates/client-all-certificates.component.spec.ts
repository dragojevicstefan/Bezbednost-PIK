import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAllCertificatesComponent } from './client-all-certificates.component';

describe('ClientAllCertificatesComponent', () => {
  let component: ClientAllCertificatesComponent;
  let fixture: ComponentFixture<ClientAllCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAllCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAllCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
