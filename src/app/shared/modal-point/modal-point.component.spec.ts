import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPointComponent } from './modal-point.component';

describe('ModalPointComponent', () => {
  let component: ModalPointComponent;
  let fixture: ComponentFixture<ModalPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPointComponent]
    });
    fixture = TestBed.createComponent(ModalPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
