import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayReactiveFormComponent } from './array-reactive-form.component';

describe('ArrayReactiveFormComponent', () => {
  let component: ArrayReactiveFormComponent;
  let fixture: ComponentFixture<ArrayReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayReactiveFormComponent]
    });
    fixture = TestBed.createComponent(ArrayReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
