import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentComponent } from './child-content.component';

describe('ChildContentComponent', () => {
  let component: ChildContentComponent;
  let fixture: ComponentFixture<ChildContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildContentComponent]
    });
    fixture = TestBed.createComponent(ChildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
