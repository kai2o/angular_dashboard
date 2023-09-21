import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOrderComponent } from './section-order.component';

describe('SectionOrderComponent', () => {
  let component: SectionOrderComponent;
  let fixture: ComponentFixture<SectionOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOrderComponent]
    });
    fixture = TestBed.createComponent(SectionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
