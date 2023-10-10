import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewDeviceComponent } from './form-new-device.component';

describe('FormNewDeviceComponent', () => {
  let component: FormNewDeviceComponent;
  let fixture: ComponentFixture<FormNewDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewDeviceComponent]
    });
    fixture = TestBed.createComponent(FormNewDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
